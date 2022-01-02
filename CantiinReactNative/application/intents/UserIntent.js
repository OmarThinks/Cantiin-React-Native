import React, {useState, Fragment} from 'react';
import {Colors, TouchableRipple, Text, View, Button} from 'react-native-paper';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
const axios = require('axios');

('https://cantiin.com/api/auth/custom/login/');

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

export default function UserIntent() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = useState(false);
  const [loginFailedText, setLoginFailedText] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: Colors.grey400, height: '100%'}}>
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

      {loginFailedText ? (
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: Colors.red800,
            fontSize: 25,
          }}>
          {loginFailedText}
        </Text>
      ) : (
        <Fragment />
      )}
      <Button
        onPress={() => {
          setLoading(true);
          setLoginFailedText("");
          console.log({username,password});
          postData('https://cantiin.com/api/auth/custom/login/', {
            username,
            password,
          })
            .then(data => {
              console.log(data); // JSON data parsed by `data.json()` call
              console.log(data.status);
              if (data.status !== 200) {
                setLoginFailedText('Wrong Username or Password');
              }
              else{
                console.log(data.headers.map["set-cookie"].split(";")[0].split("=")[1]);
              }
              data.json().then(jsonData=>console.log(jsonData));
            })
            .catch(() => {
              console.log("failed");
              setLoginFailedText(
                'Something went wrong, Try again later, maybe you are not connected to the internet',
              );setLoading(false);
            })
            .finally(() => {
              setLoading(false);
            });
        }}
        style={{
          backgroundColor: Colors.green300,
          width: '50%',
          alignSelf: 'center',
          fontSize: 30,
          margin: 25,
        }}
        labelStyle={{fontSize: 20}}
        disabled={loading}
        loading={loading}
        compact={false}
        contentStyle={{padding: 10}}>
        Log In
      </Button>
    </SafeAreaView>
  );
}
