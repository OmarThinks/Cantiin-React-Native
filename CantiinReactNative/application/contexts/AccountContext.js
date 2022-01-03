import React, {createContext, Component, useState} from 'react';
export const AccountContext = createContext();
import sendData from '../helpers/sendData';
/*
state

setAccountToken
refreshAccountData
logout
*/

const AccountContextProvider = props => {
  const [accountData, setAccountData] = useState({
    userId: null,
    userData: null,
    token: null,
  });
  console.log('current Account state is');
  console.log(accountData);
  const refreshAccountData = (token = null) => {
    if (!(accountData.token || token)) {
      console.log('I found that token is null', accountData, token);
      setAccountData({userId: null, userData: null, token: null});
      return;
    }

    //const kjfdskjh= `fkj`;
    console.log('I got the token');
    console.log(`sessionid=${accountData.token || token}`); 
    sendData('GET', 'https://www.cantiin.com/api/auth/custom/user/', null, {
     
    cookie: `sessionid=${accountData.token || token}`,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log('Res went wrong');
        console.log(err);
      });
  };

  const setAccountToken = inputToken => {
    setAccountData({...accountData, token: inputToken});
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
