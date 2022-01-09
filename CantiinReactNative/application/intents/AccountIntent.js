import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../Components/CustomInputField';
import sendData from '../helpers/sendData';
import styles from '../styles';
import {AccountContext} from '../contexts/AccountContext';
import AccountLoginIntent from './Account/AccountLoginIntent';
import AccountLogoutIntent from './Account/AccountLogoutIntent';

export default function AccountIntent() {
  const {accountData, refreshAccountData} = useContext(AccountContext);
  const token = accountData.token;
  const userData = accountData.userData;
  console.log(accountData);
  if (token == null) {
    return <AccountLoginIntent />;
  }
  if (userData == null) {
    refreshAccountData(token);
    return <AccountLoginIntent />;
  }
  return <AccountLogoutIntent />;
}
