import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../../Components/CustomInputField';
import sendData from '../../helpers/sendData';
import styles from '../../styles';
import {AccountContext} from '../../contexts/AccountContext';

export default function LoadingIntent() {
  return (
    <SafeAreaView style={{...styles.mainContainerCenter}}>
      <ActivityIndicator size={60} color={Colors.green600} />
    </SafeAreaView>
  );
}
