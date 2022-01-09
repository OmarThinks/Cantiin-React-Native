import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, Colors, Checkbox} from 'react-native-paper';
import {SafeAreaView, View} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
import sendData from '../helpers/sendData';
import styles from '../styles';
import {AccountContext} from '../contexts/AccountContext';
// productName, productPrice, productInStock
export default function AddProductsIntent({navigation}) {
  // Input Fields
  console.log(navigation);
  const [productName, setProductName] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');
  const [productInStock, setProductInStock] = React.useState(true);

  const [loading, setLoading] = useState(false);
  const [failureText, setFailureText] = useState('');

  // Fields errors
  const [errors, setErrors] = React.useState({name: [''], price: ['']});
  console.log('errors', errors);
  const resetErrors = () => {
    setErrors({name: [''], price: ['']});
    setFailureText('');
  };

  const clearFieldError = fieldname => {
    setErrors({...errors, [fieldname]: ['']});
    setFailureText('');
  };

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
    resetErrors();
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
        console.log(data);
        if (data.status == 201) {
          navigation.pop();
        } else {
          data.json().then(responseJson => {
            console.log(setErrors({...errors, ...responseJson}));
          });
        }
      })
      .catch(err => {
        console.log(err);
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
        setText={text => {
          clearFieldError('name');
          setProductName(text);
        }}
        error={errors.name[0]}
      />
      <CustomInputField
        label="Price"
        value={productPrice}
        setText={text => {
          clearFieldError('price');
          setProductPrice(text);
        }}
        keyboardType="numeric"
        error={errors.price[0]}
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
