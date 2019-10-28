import React, { Component, createContext } from 'react';
import mailer from '../utils/mailer';

export const StoreContext = createContext();


export const withStore = WrappedComponent => class HOC extends Component {
  state = {
    showNotif: false,
    errorState: false,
    message: 'default',
    loading: false,
  };

  setMailState = (detail) => {
    this.setState({
      ...detail,
    });
  };

  handleSendMail = async (details) => {
    await mailer(details, this.setMailState);
  };

  render() {
    return (
      <StoreContext.Provider
        value={{
          mailState: { ...this.state },
          setMailState: this.setMailState,
          handleSendMail: this.handleSendMail,
        }}
      >
        <WrappedComponent />
      </StoreContext.Provider>
    );
  }
};
