/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Fragment} from 'react';
import ProductsListIntent from './intents/ProductsListIntent';
import UserIntent from './intents/UserIntent';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DefaultTheme,
  Provider as PaperProvider,
  DarkTheme,
} from 'react-native-paper';
import {Avatar} from 'react-native-paper';

import {
  ActivityIndicator,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
  Button,
} from 'react-native-paper';

import {View} from 'react-native';
import {Colors} from 'react-native-paper';
import {IconButton} from 'react-native-paper';

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
            options={{
              title: 'Products List',
              headerStyle: {
                backgroundColor: Colors.black,
              },
              headerTintColor: Colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShown: false,
              headerRight: ({}) => {
                return (
                  <View>
                    <IconButton
                      size={20}
                      icon="account"
                      style={{backgroundColor: 'white'}}
                      onPress={() => {
                        //console.log('User');
                        //navigation.navigate('UserIntent');
                      }}
                    />
                  </View>
                );
              },
            }}
          />

        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
