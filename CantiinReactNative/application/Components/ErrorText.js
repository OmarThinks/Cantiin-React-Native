import React, {Fragment} from 'react';
import styles from '../styles';
import {Text} from 'react-native-paper';

const ErrorText = inputErrorText => {
  return inputErrorText ? (
    <Text style={styles.loginErrortext}>{inputErrorText}</Text>
  ) : (
    <Fragment />
  );
};

export default ErrorText;
