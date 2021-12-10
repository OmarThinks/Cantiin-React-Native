import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import React,{useState, useEffect, useContext, useReducer} from 'react';
import styles from '../styles';

const axios = require('axios');




export default function ProductsList() {
  
  const [currentPage,setCurrentPage]= useState(1);
  const [response,setResponse]= useState([]);
  
  useEffect(()=>{
    axios.get('https://www.cantiin.com/api/products/').then(function (response) {
    setResponse(response.data); })   
  }, [currentPage]);

  
  
  console.log(response);
  
   return (
        <SafeAreaView>
        <View style={{ backgroundColor: 'blue', ...styles.mainContainer }}>
          <View style={{ backgroundColor: 'red', ...styles.mainContent }}>
            <ScrollView style={{backgroundColor:"yellow",}}>
              <Text>Hi!</Text>
            </ScrollView>
          </View>
          <View style={{ backgroundColor: 'magenta', ...styles.mainFootBar }}>
            <Text>Wassup</Text>
          </View>
        </View>
      </SafeAreaView>
    )
}
