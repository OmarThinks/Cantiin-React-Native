import React, {Fragment} from 'react';
import {Appbar, Colors} from 'react-native-paper';

const CustomHeader = ({
  title = 'default title',
  subtitle = '',
  navigation = undefined,
  onPress = () => {},
} = {}) => {
  const headerStyle = {backgroundColor: Colors.black};

  const rightContent = (
    <Fragment>
      <Appbar.Action
        icon="account"
        onPress={onPress}
        color={Colors.white}
        style={{backgroundColor: Colors.grey800}}
      />
    </Fragment>
  );
  return (
    <Appbar.Header style={headerStyle}>
      <Appbar.Content title={title} subtitle={subtitle} style={headerStyle} />
      {rightContent}
    </Appbar.Header>
  );
};

export default CustomHeader;
