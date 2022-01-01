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
import {getHeaderTitle} from '@react-navigation/elements';

import {Appbar} from 'react-native-paper';

import CustomHeader from './Components/CustomHeader';

const Stack = createNativeStackNavigator();

const theme = {...DefaultTheme};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="ProductsListIntent">
          <Stack.Screen
            name="ProductsList"
            component={ProductsListIntent}
            options={{
              header: ({navigation, route, options, back}) => {
                const title = 'Products List';
                const moveToUserIntent = () => {
                  navigation.navigate('AccountIntent');
                };
                return (
                  <CustomHeader
                    title={title}
                    navigation={navigation}
                    rightContent={
                      <Appbar.Action
                        icon="account"
                        onPress={moveToUserIntent}
                        color={Colors.white}
                        style={{backgroundColor: Colors.grey800}}
                      />
                    }
                  />
                );
              },
            }}
          />

          <Stack.Screen
            name="AccountIntent"
            component={UserIntent}
            options={{
              header: ({navigation, route, options, back}) => {
                const title = 'Account';
                return (
                  <CustomHeader title={title} back={navigation} />
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
