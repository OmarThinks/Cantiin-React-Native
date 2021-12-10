import React from 'react';
import { StyleSheet } from 'react-native';

const mainContainer = { height:"100%", width:"100%"};
const mainFootBar = {height:"10%", width:"100%"};
const mainContent = {height:"90%", width:"100%"};
const mainDivider = {height:3};
const footerButtonView = {width:"50%", height:"100%", padding:5};
const footerButton = {width:"100%", height:"100%",borderRadius:10,};
const footerButtonText = {alignSelf:"center", marginTop:"auto", marginBottom:"auto"};
const footerButtonDisabled = {...footerButton, backgroundColor:"grey"};

const styles = StyleSheet.create({
    mainContainer, mainFootBar, mainContent, mainDivider, footerButtonView, footerButton,
    footerButtonText, footerButtonDisabled
  });

export default styles;