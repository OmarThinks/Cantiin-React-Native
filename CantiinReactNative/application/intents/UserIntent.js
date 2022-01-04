import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
import sendData from '../helpers/sendData';
import styles from '../styles';
import {AccountContext} from '../contexts/AccountContext';
import UserIntentLogin from './UserIntentLogin';
import UserIntentLogout from './UserIntentLogout';

export default function UserIntent() {
  const initialIntentView = (
    <SafeAreaView style={{...styles.LoadingScreen}}>
      <ActivityIndicator animating={true} color={Colors.red800} />
    </SafeAreaView>
  );

  //return <UserIntentLogin />;
  return <UserIntentLogout />;
}
