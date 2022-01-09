import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, Colors, Checkbox} from 'react-native-paper';
import {SafeAreaView, View} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
import sendData from '../helpers/sendData';
import styles from '../styles';
import {AccountContext} from '../contexts/AccountContext';
// productName, productPrice, productInStock
export default function AddProductsIntent() {
  const [productName, setProductName] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');
  const [productInStock, setProductInStock] = React.useState(true);

  const [loading, setLoading] = useState(false);
  const [failureText, setFailureText] = useState('');

  const {accountData} = useContext(AccountContext);
  const token = accountData.token;
  //console.log(token);

  const errorTextFragment = failureText ? (
    <Text style={styles.loginErrortext}>{failureText}</Text>
  ) : (
    <Fragment />
  );
  console.log('ajhjhasdgjh');
  const handleAddProductPress = () => {
    setLoading(true);
    setFailureText('');
    sendData(
      'POST',
      'https://cantiin.com/api/products/',
      {
        name: productName,
        price: productPrice,
        in_stock: productInStock,
      },
      {
        cookie: `sessionid=${token}`,
      },
    )
      .then(data => {
        if (data.status !== 200) {
        } else {
        }
      })
      .catch(() => {
        setFailureText(
          'Something went wrong, Try again later, maybe you are not connected to the internet',
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.mainAccountContainer}>
      <CustomInputField
        label="Name"
        value={productName}
        setText={text => setProductName(text)}
      />
      <CustomInputField
        label="Price"
        value={productPrice}
        setText={text => setProductPrice(text)}
        keyboardType="numeric"
      />
      <Checkbox.Item
        label="In Stock"
        status={productInStock ? 'checked' : 'unchecked'}
        position="leading"
        color={Colors.green700}
        onPress={() => {
          setProductInStock(!productInStock);
        }}
        labelStyle={{
          fontSize: 20,
          marginLeft: 0,
          marginRight: 'auto',
          paddingLeft: 0,
          paddingRight: 'auto',
        }}
        style={{display: 'flex', flexDirection: 'row'}}
      />

      {errorTextFragment}
      <Button
        onPress={handleAddProductPress}
        style={styles.requestButton}
        labelStyle={styles.requestButtonLabel}
        disabled={loading}
        loading={loading}
        compact={false}
        contentStyle={styles.requestButtonContent}>
        Add Product
      </Button>
    </SafeAreaView>
  );
}
