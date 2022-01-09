import React, {useState, Fragment, useContext} from 'react';
import {Text, Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import styles from '../../styles';
import {AccountContext} from '../../contexts/AccountContext';
import sendData from '../../helpers/sendData';
import fetchWithTimeout from '../../helpers/fetchWithTimeout';

export default function AccountLogoutIntent() {
  const [loading, setLoading] = useState(false);
  const [failText, setFailText] = useState('');

  const {accountData, logoutAccount} = useContext(AccountContext);
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

  const handleLogoutPress = () => {
    setLoading(true);
    setFailText('');

    /*axios({
      method: 'post',
      url: `https://cantiin.com/api/auth/custom/logout/`,
      timeout: 1000 * 3, // Wait for n seconds
    })*/

    sendData('POST', 'https://cantiin.com/api/auth/custom/logout/')
      .then(data => {
        logoutAccount();
      })
      .catch(() => {
        console.log('logout failed');
        setFailText(
          'Something went wrong, Try again later, maybe you are not connected to the internet',
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={{...styles.mainContainerCenter}}>
      {additionalContent}
      <Button
        onPress={handleLogoutPress}
        style={{...styles.requestButton}}
        labelStyle={styles.requestButtonLabel}
        disabled={loading}
        loading={loading}
        compact={false}
        contentStyle={styles.requestButtonContent}>
        Log Out
      </Button>
      <Text style={styles.loginErrortext}>{failText}</Text>
    </SafeAreaView>
  );
}
