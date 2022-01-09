import React, {createContext, Component, useState, useEffect} from 'react';
export const AccountContext = createContext();
import sendData from '../helpers/sendData';

import {
  getToken,
  getUserData,
  storeToken,
  storeUserdata,
} from '../helpers/Storage/accountStorage';

/*
state

setAccountToken
refreshAccountData
logout
*/

const AccountContextProvider = props => {
  const [accountState, setAccountState] = useState({
    userData: null,
    token: null,
    initialized: false,
  });

  useEffect(() => {
    if (accountState.initialized === false) {
      (async () => {
        const token = await getToken();
        const userData = await getUserData();
        console.log("Stored data", token, userData);
        setAccountState({
          userData,
          token,
          initialized: true,
        });
      })();
    }
  });


  
  useEffect(() => {
    if (accountState.initialized === true) {
      storeToken(accountState.token);
      storeUserdata(accountState.userData);
    }
  }, [accountState]);

  /*
  useEffect(() => {
    if (accountData.initialized === true) {
      (async () => {
        //const token = await getToken();

        //if (token) {
        //  return;
        //} // The user is already logged in, but
        //const userData = await getUserData();
        storeToken(accountData.token);
        storeUserdata(accountData.userData);
      })();
    }
  }, [accountData]);

*/

  /*(async () => {
    //const storedToken = await getToken();
    //const storedUserData = await getUserData();
    //console.log('stored Token is');
    //console.log(storedToken);
    //console.log('stored UserData is');
    //console.log(storedUserData);
  })();*/

  //console.log('current Account state is');
  //console.log(accountData);

  const refreshAccountData = (inputToken = null) => {
    const token = accountState.token || inputToken;
    //console.log('token is', token);
    if (!token) {
      //console.log('I found that token is null', accountData, token);
      setAccountState({...accountState, userData: null, token: null});
      return;
    }

    //console.log('I got the token');
    //console.log(`sessionid=${token}`);
    sendData('GET', 'https://www.cantiin.com/api/auth/custom/user/', null, {
      cookie: `sessionid=${token}`,
    })
      .then(res => {
        console.log("refresh response", res);
        if(res.status === 401){
          setAccountState({...accountState, token: null, userData: null});
          return;
        }

        res.json().then(resJSON => {
          console.log("refresh", resJSON);
          setAccountState({...accountState, userData: resJSON, token: token});
        });
      })
      .catch(err => {
        //console.log('Res went wrong');
        //console.log(err);
      });
  };

  const setAccountToken = inputToken => {
    refreshAccountData(inputToken);
  };

  const logoutAccount = () => {
    setAccountState({...accountState, userData: null, token: null});
    //storeToken(null);
    //storeUserdata(null);
  };

  const parsedContext = {
    accountData: accountState,
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
