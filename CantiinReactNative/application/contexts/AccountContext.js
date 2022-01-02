import React, {createContext, Component} from 'react';
export const AccountContext = createContext();

/*
state

setAccountToken
refreshAccountData
logout
*/

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

export default AccountContextProvider;
