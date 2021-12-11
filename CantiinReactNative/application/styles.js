import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const mainContainer = {height: '100%', width: '100%'};
const mainFootBar = {
  height: '10%',
  width: '100%',
  backgroundColor: Colors.grey700,
};
const mainContent = {height: '90%', width: '100%'};
const mainDivider = {height: 3};
const footerButtonView = {width: '50%', height: '100%', padding: 7};
const footerButton = {
  width: '100%',
  height: '100%',
  borderRadius: 10,
  backgroundColor: Colors.green200,
};
const footerButtonDisabled = {
  ...footerButton,
  backgroundColor: Colors.transparent,
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

const styles = StyleSheet.create({
  mainContainer,
  mainFootBar,
  mainContent,
  mainDivider,
  footerButtonView,
  footerButtonStyle,
  footerButtonText,
  splitter,
  itemColor,
  itemBackgroundColor,
  cardStyle,
});

export default styles;
