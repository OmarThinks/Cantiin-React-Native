import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async storage_Key => {
  try {
    return await AsyncStorage.getItem('@storage_Key');
  } catch (e) {
    return null;
  }
};
const getDataJSON = async storage_Key => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};

const getToken = () => {
  return getData('token');
};

const getUserData = () => {
  return getDataJSON('userData');
};
