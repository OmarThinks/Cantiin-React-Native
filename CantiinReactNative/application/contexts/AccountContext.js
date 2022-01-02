import React, {createContext, Component} from 'react';
export const AccountContext = createContext();

/*
state

setAccountToken
refreshAccountData
*/

class AccountContextProvider extends Component {
  state = {
    userId: null,
    userData: null,
    token: null,
  };

  setAccountToken = () => {
    this.setState({
      user: null,
      userData: null,
      userId: null,
    });
  };

  refreshAccountData = () => {
    this.setState({
      user: null,
      userData: null,
      userId: null,
    });
  };

  render() {
    const parsedContext = {
      data: this.state,
      setAccountToken: this.setAccountToken,
      refreshAccountData: this.refreshAccountData,
    };
    return (
      <AccountContext.Provider value={parsedContext}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}

export default AccountContextProvider;
