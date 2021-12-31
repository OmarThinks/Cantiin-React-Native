import React from 'react';
import {Appbar, Colors} from 'react-native-paper';

const CustomHeader = props => {
  const title = props.title;
  const subtitle = props.subtitle ? props.subtitle : undefined;
  const navigation = props.navigation ? props.navigation : undefined;
  return (
    <Appbar.Header style={{backgroundColor: Colors.black}}>
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

export default CustomHeader;
