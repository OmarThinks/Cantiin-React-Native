import React from 'react';
import { StyleSheet } from 'react-native';
import {Colors} from 'react-native-paper';


const mainContainer = { height:"100%", width:"100%"};
const mainFootBar = {height:"10%", width:"100%"};
const mainContent = {height:"90%", width:"100%"};
const mainDivider = {height:3};
const footerButtonView = {width:"50%", height:"100%", padding:5};
const footerButton = {width:"100%", height:"100%",borderRadius:10,};
const footerButtonText = {alignSelf:"center", marginTop:"auto", marginBottom:"auto"};
const footerButtonDisabled = {...footerButton, backgroundColor:"grey"};
const splitter = { width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between"};
const itemColor = (available)=>(
  available?{color:Colors.green700}:{color:Colors.red700});
const itemBackgroundColor = (available)=>(
  available?{backgroundColor:Colors.green100}:{backgroundColor:Colors.red100});
const cardStyle = (available)=>{
  return {
    margin:3, paddingHorizontal:5, borderStyle:"solid", 
    borderWidth:2, ...itemBackgroundColor(available)
  }};

const styles = StyleSheet.create({
    mainContainer, mainFootBar, mainContent, mainDivider, footerButtonView, footerButton,
    footerButtonText, footerButtonDisabled, splitter, itemColor, itemBackgroundColor,cardStyle
  });

export default styles;