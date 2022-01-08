import React, {useState, Fragment, useContext} from 'react';
import {Text, Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import styles from '../../styles';
import {AccountContext} from '../../contexts/AccountContext';

export default function AccountIntentLogout() {
  const [loading, setLoading] = useState(false);
  const {accountData} = useContext(AccountContext);
  const displayedUsernameText = `Your Username: ${accountData.userData.username}`;
  let additionalContent = <Fragment />;
  if (accountData.userData != null) {
    console.log('accountData is', accountData.userData.id);
    additionalContent = (
      <Fragment>
        <Text style={{...styles.userData}}>{displayedUsernameText}</Text>
      </Fragment>
    );
  }

  return (
    <SafeAreaView style={{...styles.mainContainerCenter}}>
      {additionalContent}
      <Button
        //onPress={handleLoginPress}
        style={{...styles.requestButton}}
        labelStyle={styles.requestButtonLabel}
        disabled={loading}
        loading={loading}
        compact={false}
        contentStyle={styles.requestButtonContent}>
        Log Out
      </Button>
    </SafeAreaView>
  );
}
