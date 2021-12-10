import React from 'react'
import {SafeAreaView, Text, View} from 'react-native';
const axios = require('axios');

export default function ProductsList() {
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
    )
}
