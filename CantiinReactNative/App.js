/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
const axios = require('axios');

const App = () => {
  axios.get('https://www.cantiin.com/api/products/')
  .then(function (response) {
    console.log(response.data);
  });
  
  return (
    <SafeAreaView >
      <Text>Hi!</Text>
    </SafeAreaView>
  );
};


export default App;
