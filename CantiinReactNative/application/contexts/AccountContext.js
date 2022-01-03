import React, {createContext, Component, useState} from 'react';
export const AccountContext = createContext();

/*
state

setAccountToken
refreshAccountData
logout
*/
/*
class AccountContextProvider extends Component {
  state = {
    userId: null,
    userData: null,
    token: null,
  };

  setAccountToken = inputToken => {
    this.setState({
      token: inputToken,
    });
  };

  refreshAccountData = () => {
    this.setState({
      user: null,
      userData: null,
      userId: null,
    });
  };

  logoutAccount = () => {
    this.setState({
      userId: null,
      userData: null,
      token: null,
    });
  };

  render() {
    const parsedContext = {
      data: this.state,
      setAccountToken: this.setAccountToken,
      refreshAccountData: this.refreshAccountData,
      logoutAccount: this.logoutAccount,
    };
    return (
      <AccountContext.Provider value={parsedContext}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}
*/

const AccountContextProvider = (props) => {
  const [state, setState] = useState({
    userId: null,
    userData: null,
    token: null,
  });

  const setAccountToken = inputToken => {
    setState({...state,
      token: inputToken,
    });
  };

  const refreshAccountData = () => {
    setState({
      user: null,
      userData: null,
      userId: null,
    });
  };

  const logoutAccount = () => {
    setState({
      userId: null,
      userData: null,
      token: null,
    });
  };

  const parsedContext = {
    data: state,
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
