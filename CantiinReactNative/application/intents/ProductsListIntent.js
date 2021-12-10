import {SafeAreaView, Text, View, ScrollView, FlatList} from 'react-native';
import React,{useState, useEffect, useContext, useReducer, Fragment} from 'react';
import styles from '../styles';
import { ActivityIndicator, Colors, Divider, Card, Title, Paragraph, Button, TouchableRipple } from 'react-native-paper';

const axios = require('axios');



const renderItem = ({ item }) => (
  <Fragment>
    <Card>
      <Title>{item.name}</Title>
      <Paragraph>${item.price}</Paragraph>
      <Divider style={{...styles.mainDivider}}/>
    </Card>
  </Fragment>
);


export default function ProductsList() {
  
  const [currentPage,setCurrentPage]= useState(1);
  const [response,setResponse]= useState([]);
  
  useEffect(()=>{
    //axios.get('https://www.cantiin.com/api/products/').then(function (response) {
    //setResponse(response.data); })   
  }, [currentPage]);

  
  let loading = (()=>{
    if (response.length==0) {
      return <ActivityIndicator animating={loading} color={Colors.red800} />;
    }
    return <Fragment/>
  })();
  console.log(loading);  
  
  console.log("response",response);

   return (
        <SafeAreaView>
        <View style={{ backgroundColor: 'blue', ...styles.mainContainer }}>
          <View style={{ ...styles.mainContent }}>
            {loading}
            <SafeAreaView style={{flex: 1}}>
              <FlatList
                data={response.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Divider style={{...styles.mainDivider}}></Divider>}
                ListFooterComponent={<Divider style={{...styles.mainDivider}}></Divider>}
              />  
            
            </SafeAreaView> 


          </View>
          <View style={{ backgroundColor: 'yellow', ...styles.mainFootBar, display:"flex", flexDirection:"row" }}>
            <TouchableRipple onPress={() => {}}rippleColor="red" style={{width:"50%", height:"100%"}}>
              <Text>Press anywhere</Text>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}rippleColor="red" style={{width:"50%", height:"100%"}} >
              <Text>Press anywhere</Text>
            </TouchableRipple>
          </View>
        </View>
      </SafeAreaView>
    )
}
