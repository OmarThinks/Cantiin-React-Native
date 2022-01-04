import React, {createContext, Component, useState, useEffect} from 'react';
export const AccountContext = createContext();
import sendData from '../helpers/sendData';

import {
  getToken,
  getUserData,
  storeToken,
  storeUserData,
} from '../helpers/Storage/accountStorage';

/*
state

setAccountToken
refreshAccountData
logout
*/

const AccountContextProvider = props => {
  const [accountData, setAccountData] = useState({
    userData: null,
    token: null,
    initialized: false,
  });

  useEffect(() => {
    if (accountData.initialized === false) {
      (async () => {
        const token = await getToken();
        const userData = await getUserData();
        setAccountData({
          userData,
          token,
          initialized: true,
        });
      })();
    }
  });

  getUserData().then(u => {
    console.log('userdata is ', u);
  });

  console.log('current Account state is');
  console.log(accountData);
  const refreshAccountData = (inputToken = null) => {
    const token = accountData.token || inputToken;
    console.log('token is', token);
    if (!token) {
      console.log('I found that token is null', accountData, token);
      setAccountData({userData: null, token: null});
      return;
    }

    //const kjfdskjh= `fkj`;
    console.log('I got the token');
    console.log(`sessionid=${token}`);
    sendData('GET', 'https://www.cantiin.com/api/auth/custom/user/', null, {
      cookie: `sessionid=${token}`,
    })
      .then(res => {
        console.log(res);
        console.log(
          res.json().then(resJSON => {
            console.log(resJSON);
            setAccountData({userData: resJSON, token: token});
          }),
        );
      })
      .catch(err => {
        console.log('Res went wrong');
        console.log(err);
      });
  };

  const setAccountToken = inputToken => {
    //setAccountData({...accountData, token: inputToken});
    refreshAccountData(inputToken);
  };

  const logoutAccount = () => {
    /*setState({
      userId: null,
      userData: null,
      token: null,
    });*/
  };

  const parsedContext = {
    accountData,
    setAccountToken,
    refreshAccountData,
    logoutAccount,
  };

  return (
    <AccountContext.Provider value={parsedContext}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountContextProvider;
