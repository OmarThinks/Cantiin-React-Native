import React from 'react';
import {Appbar, Colors} from 'react-native-paper';

const CustomHeader = props => {
  const title = props.title;
  const subtitle = props.subtitle ? props.subtitle : undefined;
  const navigation = props.navigation ? props.navigation : undefined;
  const headerStyle = {backgroundColor: Colors.black};
  const onPress = props.onPress ? props.onPress : () => {};
  return (
    <Appbar.Header style={headerStyle}>
      <Appbar.Content title={title} subtitle={subtitle} />
      <Appbar.Action icon="account" onPress={onPress} />
    </Appbar.Header>
  );
};

export default CustomHeader;
