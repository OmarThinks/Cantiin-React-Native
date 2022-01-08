import React, {useState, Fragment, useContext, useEffect} from 'react';
import {
  Text,
  Button,
  ActivityIndicator,
  Colors,
  Paragraph,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import CustomInputField from '../../Components/CustomInputField';
import sendData from '../../helpers/sendData';
import styles from '../../styles';
import {AccountContext} from '../../contexts/AccountContext';

export default function AccountIntentLogout() {
  const {accountData} = useContext(AccountContext);
  let additionalContent = <Fragment />;
  if (accountData.userData != null) {
    console.log('accountData is', accountData.userData.id);
    additionalContent = (
      <Fragment>
        <Paragraph> {accountData.userData.id}</Paragraph>
        <Paragraph>{accountData.userData.username}</Paragraph>
      </Fragment>
    );
  }

  return (
    <SafeAreaView
      style={{...styles.mainAccountContainer, justifyContent: 'center'}}>
      {additionalContent}
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
