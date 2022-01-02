import React, {useState} from 'react';
import {Colors, TouchableRipple, Text, View, Button} from 'react-native-paper';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
const axios = require('axios');


('https://cantiin.com/api/auth/custom/login/');

export default function UserIntent() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: Colors.grey400, height: '100%'}}>
      <CustomInputField
        label="Username or Email"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <CustomInputField
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <Button
        onPress={() => {
          setLoading(true);
          
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
