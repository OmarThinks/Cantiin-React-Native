import React from 'react'
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
const axios = require('axios');

export default function ProductsList() {
    axios.get('https://www.cantiin.com/api/products/').then(function (response) {
        const data = response.data;
        console.log(data);
      });
   return (
        <SafeAreaView>
        <View style={{
          backgroundColor: 'blue',


          height:"100%",width:"100%", padding:0
          
          
          

          }}>
          <View style={{
            backgroundColor: 'red', 
            height:"90%", width:"100%"
            
            

            }}>
            <ScrollView style={{backgroundColor:"yellow", 
            
            
            
            
            
            
            
            }}>
              <Text>Hi!</Text>

            </ScrollView>
          </View>
          <View style={{backgroundColor: 'magenta', height:"10%", width:"100%", padding:0, margin:0}}>
            <Text>Wassup</Text>
          </View>
        </View>
      </SafeAreaView>
    )
}
