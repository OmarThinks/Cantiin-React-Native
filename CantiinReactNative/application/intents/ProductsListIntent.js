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



const FooterButton = ( props ) =>{
  const inputs = {};
  inputs.text = props.text!= undefined? props.text : "";
  inputs.onPress = props.onPress!= undefined? props.onPress : ()=>{};
  inputs.disabled = props.disabled!= undefined? props.disabled : false;

  let style = inputs.disabled? styles.footerButtonDisabled: styles.footerButton;

  return(

  <View style={{...styles.footerButtonView}}>
    <TouchableRipple 
      onPress={() => { inputs.onPress();}} 
      rippleColor="red" 
      style={{...style}}
      borderless={true}
      disabled={inputs.disabled}
    >
      <Text style={{...styles.footerButtonText}}>
          {inputs.text}
      </Text>
    </TouchableRipple>
</View>)

}









export default function ProductsList() {
  
  const [currentPage,setCurrentPage]= useState(1);
  const [response,setResponse]= useState([]);
  let loaded=false;
  useEffect(()=>{
    loaded=false;
    axios.get(`https://cantiin.com/api/products/?page=${currentPage.toString()}`)
    .then(function (response) {loaded=true;setResponse(response.data); })   
  }, [currentPage]);

  let nextDisabled=false, prevDisabled=false;


  
  let loading = (()=>{
    if (response.length==0) {//We are still loading
      nextDisabled=true; prevDisabled=true;
      return <ActivityIndicator animating={loading} color={Colors.red800} />;
    }
    else{// We are done loading
      nextDisabled = (response.next==null)?true:false;
      prevDisabled = (response.previous==null)?true:false;
      return <Fragment/>}
  })();

  console.log(nextDisabled, prevDisabled);



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
            <FooterButton disabled={prevDisabled} text="Previous"
              onPress={()=>{setCurrentPage(currentPage-1);}} />
            <FooterButton disabled={nextDisabled} text="Next" 
            onPress={()=>{setCurrentPage(currentPage+1);}}/>
          </View>
        </View>
      </SafeAreaView>
    )
}
