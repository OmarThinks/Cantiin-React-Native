import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useState, useEffect, useContext, useReducer, Fragment} from 'react';
import React from 'react';
///import styles from '../styles';
import {
  ActivityIndicator,
  Colors,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
} from 'react-native-paper';

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

const styles = StyleSheet.create({
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

export default function ProductsListIntent() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
