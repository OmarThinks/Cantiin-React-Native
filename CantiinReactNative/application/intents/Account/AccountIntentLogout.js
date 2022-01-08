import React, {useState, Fragment, useContext, useEffect} from 'react';
import {Text, Button, ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../../Components/CustomInputField';
import sendData from '../../helpers/sendData';
import styles from '../../styles';
import {AccountContext} from '../../contexts/AccountContext';

export default function AccountIntentLogout() {
  return (
    <SafeAreaView
      style={{...styles.mainAccountContainer, justifyContent: 'center'}}>
      <Button
        //onPress={handleLoginPress}
        style={{...styles.requestButton}}
        labelStyle={styles.requestButtonLabel}
        //disabled={loading}
        //loading={loading}
        compact={false}
        contentStyle={styles.requestButtonContent}>
        Log Out
      </Button>
    </SafeAreaView>
  );
}
