/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
const axios = require('axios');

const App = () => {
  axios.get('https://www.cantiin.com/api/products/').then(function (response) {
    const data = response.data;
    console.log(data);
  });
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%', backgroundColor: 'blue'}}>
        <View style={{flexGrow: 1, backgroundColor: 'red', padding: 30}}>
          <Text>Hi!</Text>
        </View>
        <View style={{backgroundColor: 'magenta', padding: 20}}>
          <Text>Wassup</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;