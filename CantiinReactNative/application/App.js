/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import ProductsListIntent from './intents/ProductsListIntent';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DefaultTheme,
  Provider as PaperProvider,
  DarkTheme,
} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const theme = {...DefaultTheme};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="ProductsList">
          <Stack.Screen
            name="ProductsList"
            component={ProductsListIntent}
            options={{title: 'Products List'}}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
