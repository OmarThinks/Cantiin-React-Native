import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import {useState, useEffect, Fragment, useContext} from 'react';
import React from 'react';
import styles from '../styles';
import {
  ActivityIndicator,
  Colors,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
  Button,
  FAB,
  Icon,
  Image,
} from 'react-native-paper';
//import {AccountContext} from '../../contexts/AccountContext';
import {AccountContext} from '../contexts/AccountContext';
import ErrorText from '../Components/ErrorText';
import sendData from '../helpers/sendData';

const axios = require('axios');

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const renderItem = ({item}) => {
  const availabilityColorStyle = {
    ...styles.itemColor(item.in_stock),
    fontWeight: 'bold',
  };
  const cardStyle = {...styles.cardStyle(item.in_stock)};
  return (
    <Fragment>
      <Card style={cardStyle}>
        <Title>{item.name}</Title>

        <View style={{...styles.splitter}}>
          <Paragraph>${item.price}</Paragraph>
          <Paragraph style={availabilityColorStyle}>
            {item.in_stock ? 'In-Stock' : 'Out of Stock'}
          </Paragraph>
        </View>
      </Card>
    </Fragment>
  );
};

const FooterButton = props => {
  const inputs = {};
  inputs.text = props.text !== undefined ? props.text : '';
  inputs.onPress = props.onPress !== undefined ? props.onPress : () => {};
  inputs.disabled = props.disabled !== undefined ? props.disabled : false;

  return (
    <View style={{...styles.footerButtonView}}>
      <TouchableRipple
        onPress={() => {
          inputs.onPress();
        }}
        style={{...styles.footerButtonStyle(inputs.disabled)}}
        borderless={true}
        disabled={inputs.disabled}>
        <Text style={{...styles.footerButtonText(inputs.disabled)}}>
          {inputs.disabled ? '' : inputs.text}
        </Text>
      </TouchableRipple>
    </View>
  );
};

const stylesHelper = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function ProductsListIntent({navigation}) {
  //console.log("navigation", navigation);
  const [currentPage, setCurrentPage] = useState(1);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const {accountData} = useContext(AccountContext);

  const loadPage = () => {
    setLoading(true);
    setResponse({});
    sendData(
      'GET',
      `https://cantiin.com/api/products/?page=${currentPage.toString()}`,
    )
      .then(data => {
        console.log(data);
        return data.json();
      })
      .then(function (responseOfRequest) {
        console.log(responseOfRequest);
        setLoading(false);
        setRequestError(false);
        setResponse(responseOfRequest);
        //console.log(responseOfRequest.data);
      })
      .catch(() => {
        console.log('Fetch Failed');
        setRequestError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadPage();
  }, [currentPage]);

  console.log('loading', loading);

  //let nextDisabled = false,prevDisabled = false;

  /*let loadingComponent = (() => {
    if (loading) {
      //nextDisabled = true;
      //prevDisabled = true;
      return <ActivityIndicator animating={true} color={Colors.red800} />;
    } else {
      nextDisabled = response.next == null ? true : false;
      prevDisabled = response.previous == null ? true : false;
      return <Fragment />;
    }
  })();*/

  let nextDisabled = response.next == null ? true : false;
  let prevDisabled = response.previous == null ? true : false;

  //console.log(nextDisabled, prevDisabled);

  console.log('response', response);

  if (requestError) {
    return (
      <SafeAreaView>
        <ErrorText error={'Something went wrong, try again later!'} />
        <Button
          onPress={() => {
            setLoading(true);
            loadPage();
          }}
          style={styles.requestButton}
          labelStyle={{fontSize: 20}}
          disabled={loading}
          loading={loading}
          contentStyle={styles.requestButtonContent}>
          Refresh
        </Button>
      </SafeAreaView>
    );
  }

  let addProductsFab = <Fragment />;

  //console.log("ProductsListToken",accountData.token);

  /*
      <FAB
        style={styles.fab}
        //small
        //icon="plus"
        //icon="plus"
        /*icon={() => {
          return <Icon name="warning" size={24} color="#fff" />;
        }}

        // * /

        icon={{image: 'plus'}}
        onPress={() => console.log('Pressed')}
        color={Colors.black}
        //contentStyle={{backgroundColor:"blue", innerWidth:100, outerWidth:100, color:"white"}}
        a
      />

*/

  if (accountData.token) {
    addProductsFab = (
      <FAB
        style={styles.fab}
        onPress={() => {
          navigation.navigate('AddProducts');
          //console.log("I am pressed");
        }}
        icon="plus"
        //onPress={() => console.log('Pressed')}
        color={Colors.black}

        //contentStyle={{backgroundColor:"blue", innerWidth:100, outerWidth:100, color:"white"}}
        //a
      />
    );
  }
  return (
    <SafeAreaView>
      <View style={{...styles.mainContainer}}>
        <View style={{...styles.mainContent}}>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              data={response.results}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onRefresh={loadPage}
              refreshing={loading}
            />
            {addProductsFab}
          </SafeAreaView>
        </View>
        <View
          style={{
            ...styles.mainFootBar,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <FooterButton
            disabled={prevDisabled}
            text="Previous"
            onPress={() => {
              if (!loading) {
                setCurrentPage(currentPage - 1);
              }
            }}
          />
          <FooterButton
            disabled={nextDisabled}
            text="Next"
            onPress={() => {
              if (!loading) {
                setCurrentPage(currentPage + 1);
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
