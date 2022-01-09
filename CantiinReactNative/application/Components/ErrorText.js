import React, {Fragment} from 'react';
import styles from '../styles';
import {Text} from 'react-native-paper';

const ErrorText = ({error}) => {
  return (
    
    error ? (
    <Text style={styles.loginErrortext}>{error}</Text>
  ) : (
    <Fragment />
  )
  )

};

export default ErrorText;
