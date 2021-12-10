/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import ProductsList from './intents/ProductsListIntent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductsList">
        <Stack.Screen 
          name="ProductsList" component={ProductsList} 
          options={{ title: 'Products List' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;