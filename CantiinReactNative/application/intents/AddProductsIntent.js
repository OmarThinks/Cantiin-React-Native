import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
import sendData from '../helpers/sendData';
import styles from '../styles';
import {AccountContext} from '../contexts/AccountContext';
// productName, Price, InStock
export default function AddProductsIntent() {
  const [productName, setProductName] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');
  const [loading, setLoading] = useState(false);
  const [failureText, setFailureText] = useState('');



  const errorTextFragment = failureText ? (
    <Text style={styles.loginErrortext}>{failureText}</Text>
  ) : (
    <Fragment />
  );

  const handleAddProductPress = () => {
    setLoading(true);
    setFailureText('');
    sendData('POST', 'https://cantiin.com/api/auth/custom/login/', {
      username: productName,
      password: productPrice,
    })
      .then(data => {
        if (data.status !== 200) {
          setFailureText('Wrong Username or Password');
        } else {
          const cookieData = {};
          data.headers.map['set-cookie'].split(';').map(stringInput => {
            const singleCookieData = stringInput.split('=');
            cookieData[singleCookieData[0].trim()] = singleCookieData[1];
          });
          //console.log(cookieData);
          const token = cookieData['Secure, sessionid'];
          console.log(token);
          //console.log(cookieData['Secure, sessionid']);
          setAccountToken(token);
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
        secureTextEntry={true}
      />
      <CustomInputField
        label="In Stock"
        value={productPrice}
        setText={text => setProductPrice(text)}
        secureTextEntry={true}
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
