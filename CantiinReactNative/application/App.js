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

const Stack = createNativeStackNavigator();

const theme = {...DefaultTheme};

/*
const App = () => {
  const MORE_ICON = 'dots-horizontal';
  const MyComponent = () => (
    <Appbar.Header>
      <Appbar.Content title="Title" subtitle={'Subtitle'} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  );
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
              //headerShown: false,
              headerRight: () => {
                return (
                  <View>
                    <IconButton
                      size={20}
                      icon="account"
                      style={{backgroundColor: 'white'}}
                      onPress={() => {
                        //console.log("Navigation", navigation);
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



*/

const App = () => {
  const MORE_ICON = 'dots-horizontal';
  const MyComponent = props => {
    const title = props.title;
    const subtitle = props.subtitle ? props.subtitle : undefined;
    const navigation = props.navigation ? props.navigation : undefined;
    return (
      <Appbar.Header style={{backgroundColor:Colors.black}}>
        <Appbar.Content title={props.title} subtitle={subtitle} />
        <Appbar.Action
          icon="account"
          onPress={() => {
            console.log(navigation);
            navigation.navigate('ProductsList1');
          }}
        />
      </Appbar.Header>
    );
  };
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="ProductsList">
          <Stack.Screen
            name="ProductsList"
            component={ProductsListIntent}
            options={{
              title: 'Products List',

              header: ({navigation, route, options, back}) => {
                const title = getHeaderTitle(options, route.name);

                return (
                  <MyComponent
                    title={title}
                    navigation={navigation}
                    leftButton={
                      back ? (
                        <MyBackButton onPress={navigation.goBack} />
                      ) : undefined
                    }
                    style={options.headerStyle}
                  />
                );
              },

              //headerShown: false,
              headerRight: () => {
                return (
                  <View>
                    <IconButton
                      size={20}
                      icon="account"
                      style={{backgroundColor: 'white'}}
                      onPress={() => {
                        //console.log("Navigation", navigation);
                        //navigation.navigate('UserIntent');
                      }}
                    />
                  </View>
                );
              },
            }}
          />

          <Stack.Screen
            name="ProductsList1"
            component={ProductsListIntent}
            options={{
              title: 'Products List',

              header: ({navigation, route, options, back}) => {
                const title = getHeaderTitle(options, route.name);

                return (
                  <MyComponent
                    title={title}
                    navigation={navigation}
                    style={options.headerStyle}
                  />
                );
              },

              //headerShown: false,
              headerRight: () => {
                return (
                  <View>
                    <IconButton
                      size={20}
                      icon="account"
                      style={{backgroundColor: 'white'}}
                      onPress={() => {
                        //console.log("Navigation", navigation);
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
