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

const storeData = async value => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    // saving error
  }
};

const storeDataJSON = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getToken = () => {
  return getData('token');
};

const storeToken = token => {
  storeData(token);
};

const getUserData = () => {
  return getDataJSON('userData');
};

const storeUserdata = userData => {
  storeDataJSON(userData);
};

export {getToken, storeToken, getUserData, storeUserdata};
