import React, {Fragment} from 'react';
import styles from '../styles';
import {Text} from 'react-native-paper';

const ErrorText = ({error, input = false}) => {
  const style = input ? styles.inputErrortext : styles.loginErrortext;
  return error ? <Text style={style}>{error}</Text> : <Fragment />;
};

export default ErrorText;
