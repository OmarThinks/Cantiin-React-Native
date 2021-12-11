import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {useState, useEffect, useContext, useReducer, Fragment} from 'react';
import React from 'react';
import styles from '../styles';
import {
  ActivityIndicator,
  Colors,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
} from 'react-native-paper';

const axios = require('axios');

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
    <View
      style={{...styles.footerButtonView, backgroundColor: Colors.blueA100}}>
      <TouchableRipple
        onPress={() => {
          inputs.onPress();
        }}
        rippleColor="blue"
        style={{...styles.footerButtonStyle(inputs.disabled)}}
        borderless={true}
        disabled={inputs.disabled}>
        <Text style={{...styles.footerButtonText(inputs.disabled)}}>
          {inputs.text}
        </Text>
      </TouchableRipple>
    </View>
  );
};

export default function ProductsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setResponse({});
    axios
      .get(`https://cantiin.com/api/products/?page=${currentPage.toString()}`)
      .then(function (response) {
        setLoading(false);
        setResponse(response.data);
      })
      .catch(() => {
        console.log('Fetch Failed');
      });
  }, [currentPage]);

  console.log('loading', loading);

  let nextDisabled = false,
    prevDisabled = false;

  let loadingComponent = (() => {
    if (loading) {
      nextDisabled = true;
      prevDisabled = true;
      return <ActivityIndicator animating={true} color={Colors.red800} />;
    } else {
      nextDisabled = response.next == null ? true : false;
      prevDisabled = response.previous == null ? true : false;
      return <Fragment />;
    }
  })();

  console.log(nextDisabled, prevDisabled);

  console.log('response', response);

  return (
    <SafeAreaView>
      <View style={{...styles.mainContainer}}>
        <View style={{...styles.mainContent}}>
          {loadingComponent}
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              data={response.results}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            ...styles.mainFootBar,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <FooterButton
            disabled={prevDisabled}
            text="Previous"
            onPress={() => {
              setCurrentPage(currentPage - 1);
            }}
          />
          <FooterButton
            disabled={nextDisabled}
            text="Next"
            onPress={() => {
              setCurrentPage(currentPage + 1);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
