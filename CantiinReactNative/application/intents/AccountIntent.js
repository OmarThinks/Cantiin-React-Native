import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
import sendData from '../helpers/sendData';
import styles from '../styles';
import {AccountContext} from '../contexts/AccountContext';
import AccountIntentLogin from './Account/AccountIntentLogin';
import AccountIntentLogout from './Account/AccountIntentLogout';
import LoadingIntent from './Helpers/LoadingIntent';

export default function AccountIntent() {
  const [loading, setLoading] = useState(true);

  let toReturnAccountIntent = <Fragment />;

  if (loading) {
    return <LoadingIntent />;
  }

  //return <AccountIntentLogin />;
  //return <AccountIntentLogout />;
  return <AccountIntentLogout />;
}
