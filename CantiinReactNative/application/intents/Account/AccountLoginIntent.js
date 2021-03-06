import React, {useState, Fragment, useContext} from 'react';
import {Text, Button, ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../../Components/CustomInputField';
import sendData from '../../helpers/sendData';
import styles from '../../styles';
import {AccountContext} from '../../contexts/AccountContext';
import ErrorText from '../../Components/ErrorText';

export default function AccountLoginIntent() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = useState(false);
  const [failureText, setFailureText] = useState('');

  const {accountData, setAccountToken} =
    useContext(AccountContext);
  //console.log('accountData', accountData);

  const handleLoginPress = () => {
    setLoading(true);
    setFailureText('');
    //console.log({username, password});
    sendData('POST', 'https://cantiin.com/api/auth/custom/login/', {
      username,
      password,
    })
      .then(data => {
        //console.log(data); // JSON data parsed by `data.json()` call
        //console.log(data.status);
        if (data.status !== 200) {
          setFailureText('Wrong Username or Password');
        } else {
          const cookieData = {};
          //console.log(data.headers.map['set-cookie']);
          data.headers.map['set-cookie'].split(';').map(stringInput => {
            const singleCookieData = stringInput.split('=');
            cookieData[singleCookieData[0].trim()] = singleCookieData[1];
          });
          //console.log(cookieData);
          const token = cookieData['Secure, sessionid'];
          //console.log(token);
          //console.log(cookieData['Secure, sessionid']);
          setAccountToken(token);
        }
        /*data.json().then(jsonData => {
          //console.log(jsonData);
        });*/
      })
      .catch(() => {
        //console.log('failed');
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

      <ErrorText error={failureText}/>
      <Button
        onPress={handleLoginPress}
        style={styles.requestButton}
        labelStyle={styles.requestButtonLabel}
        disabled={loading}
        loading={loading}
        compact={false}
        contentStyle={styles.requestButtonContent}>
        Log In
      </Button>
    </SafeAreaView>
  );
}
