import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return null;
  }
};
const getDataJSON = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const storeDataJSON = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getToken = async () => {
  return getData('token');
};

const storeToken = token => {
  storeData('token', token);
};

const getUserData = async () => {
  const userData = await getDataJSON('userData');
  return userData;
};

const storeUserdata = userData => {
  storeDataJSON('userData', userData);
};

export {getToken, storeToken, getUserData, storeUserdata};
