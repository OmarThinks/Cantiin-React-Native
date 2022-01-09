import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const mainContainer = {height: '100%', width: '100%'};
const mainAccountContainer = {
  ...mainContainer,
  backgroundColor: Colors.grey400,
};

const mainContainerCenter = {...mainAccountContainer, justifyContent: 'center'};

const mainFootBar = {
  height: '10%',
  width: '100%',
  backgroundColor: Colors.grey400,
};
const mainContent = {height: '90%', width: '100%'};
const mainDivider = {height: 3};
const footerButtonView = {width: '50%', height: '100%', padding: 7};
const footerButton = {
  width: '100%',
  height: '100%',
  borderRadius: 10,
  backgroundColor: Colors.green400,
  borderWidth: 1.5,
};
const footerButtonDisabled = {
  ...footerButton,
  backgroundColor: Colors.transparent,
  borderWidth: 0,
};
const footerButtonStyle = disabled =>
  disabled ? {...footerButtonDisabled} : {...footerButton};

const footerButtonText = disbaled => {
  let defaultStyle = {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 20,
    color: Colors.black,
  };
  return disbaled
    ? {...defaultStyle, fontWeight: '100'}
    : {...defaultStyle, fontWeight: '900'};
};

const userData = {
  alignSelf: 'center',
  fontSize: 20,
  color: Colors.black,
};

const splitter = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const itemColor = available => {
  return available ? {color: Colors.green700} : {color: Colors.red700};
};

const itemBackgroundColor = available => {
  return available
    ? {backgroundColor: Colors.green100}
    : {backgroundColor: Colors.red100};
};
const cardStyle = available => {
  return {
    margin: 3,
    paddingHorizontal: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    ...itemBackgroundColor(available),
  };
};

const loginErrortext = {
  width: '100%',
  textAlign: 'center',
  color: Colors.red800,
  fontSize: 25,
  padding: 20,
};

const inputErrortext = {
  ...loginErrortext,
  textAlign: 'left',
  fontSize: 20,
  padding: 3,
};

const requestButton = {
  backgroundColor: Colors.green300,
  width: '50%',
  alignSelf: 'center',
  fontSize: 30,
  margin: 25,
};
const requestButtonContent = {padding: 10};
const requestButtonLabel = {fontSize: 20};

const LoadingScreen = {
  width: '100%',
  height: '100%',
  backgroundColor: Colors.green900,
};

const fab = {
  position: 'absolute',
  margin: 16,
  marginBottom: 25,
  right: 0,
  bottom: 0,
  backgroundColor: Colors.green400,
};

const styles = StyleSheet.create({
  mainContainer,
  mainContainerCenter,
  mainAccountContainer,
  mainFootBar,
  mainContent,
  mainDivider,
  footerButtonView,
  footerButtonStyle,
  footerButtonText,
  userData,
  splitter,
  itemColor,
  itemBackgroundColor,
  cardStyle,
  loginErrortext,
  inputErrortext,
  requestButton,
  requestButtonContent,
  requestButtonLabel,
  LoadingScreen,
  fab,
});

export default styles;
