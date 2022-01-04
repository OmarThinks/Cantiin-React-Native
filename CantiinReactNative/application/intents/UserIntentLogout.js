import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
import sendData from '../helpers/sendData';
import styles from '../styles';
import {AccountContext} from '../contexts/AccountContext';

export default function UserIntentLogout() {

  return (
    <SafeAreaView style={styles.mainAccountContainer}>
        <Text>Logout</Text>
    </SafeAreaView>
  );
}
