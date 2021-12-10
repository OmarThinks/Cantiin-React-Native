import {SafeAreaView, Text, View, ScrollView, FlatList} from 'react-native';
import React,{useState, useEffect, useContext, useReducer, Fragment} from 'react';
import styles from '../styles';
import { ActivityIndicator, Colors } from 'react-native-paper';

const axios = require('axios');



const renderItem = ({ item }) => (
  <Text >{item.id} </Text>
);


export default function ProductsList() {
  
  const [currentPage,setCurrentPage]= useState(1);
  const [response,setResponse]= useState([]);
  
  useEffect(()=>{
    axios.get('https://www.cantiin.com/api/products/').then(function (response) {
    setResponse(response.data); })   
  }, [currentPage]);

  
  let loading = (()=>{
    if (response.length==0) {
      return <ActivityIndicator animating={loading} color={Colors.red800} />;
    }
    return <Fragment/>
  })();
  console.log(loading);  
  
  console.log(response);

   return (
        <SafeAreaView>
        <View style={{ backgroundColor: 'blue', ...styles.mainContainer }}>
          <View style={{ backgroundColor: 'red', ...styles.mainContent }}>
            <ScrollView style={{backgroundColor:"yellow",}}>
            {loading}
            <SafeAreaView style={{flex: 1}}>
              <FlatList
                data={response.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />  
            
            </SafeAreaView> 


            </ScrollView>
          </View>
          <View style={{ backgroundColor: 'magenta', ...styles.mainFootBar }}>
            <Text>Wassup</Text>
          </View>
        </View>
      </SafeAreaView>
    )
}
