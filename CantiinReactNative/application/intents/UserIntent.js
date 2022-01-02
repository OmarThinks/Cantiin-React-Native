import React, {useState, Fragment} from 'react';
import {Colors, TouchableRipple, Text, View, Button} from 'react-native-paper';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
import sendData from '../helpers/sendData';
import styles from '../styles';

export default function UserIntent() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = useState(false);
  const [loginFailedText, setLoginFailedText] = useState('');

  const errorTextFragment = loginFailedText ? (
    <Text style={styles.loginErrortext}>{loginFailedText}</Text>
  ) : (
    <Fragment />
  );

  const handleLoginPress = () => {
    setLoading(true);
    setLoginFailedText('');
    console.log({username, password});
    sendData('POST', 'https://cantiin.com/api/auth/custom/login/', {
      username,
      password,
    })
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        console.log(data.status);
        if (data.status !== 200) {
          setLoginFailedText('Wrong Username or Password');
        } else {
          const cookieData = {};
          console.log(data.headers.map['set-cookie']);
          data.headers.map['set-cookie'].split(';').map(stringInput => {
            const singleCookieData = stringInput.split('=');
            cookieData[singleCookieData[0].trim()] = singleCookieData[1];
          });
          console.log(cookieData);
          console.log(cookieData['Secure, sessionid']);
        }
        data.json().then(jsonData => console.log(jsonData));
      })
      .catch(() => {
        console.log('failed');
        setLoginFailedText(
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
        label="Username or Email"
        value={username}
        setText={text => setUsername(text)}
      />
      <CustomInputField
        label="Password"
        value={password}
        setText={text => setPassword(text)}
        secureTextEntry={true}
      />

      {errorTextFragment}
      <Button
        onPress={handleLoginPress}
        style={styles.requestButton}
        labelStyle={{fontSize: 20}}
        disabled={loading}
        loading={loading}
        compact={false}
        contentStyle={styles.requestButtonContent}>
        Log In
      </Button>
    </SafeAreaView>
  );
}
