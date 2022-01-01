import React, {Fragment} from 'react';
import {Appbar, Colors} from 'react-native-paper';

const CustomHeader = props => {
  const title = props.title;
  const subtitle = props.subtitle ? props.subtitle : undefined;
  const navigation = props.navigation ? props.navigation : undefined;
  const headerStyle = {backgroundColor: Colors.black};
  const onPress = props.onPress ? props.onPress : () => {};
  const rightContent = (
    <Fragment>
      <Appbar.Content title={title} subtitle={subtitle} style={headerStyle} />
      <Appbar.Action
        icon="account"
        onPress={onPress}
        color={Colors.white}
        style={{backgroundColor: Colors.grey800}}
      />
    </Fragment>
  );
  return <Appbar.Header style={headerStyle}>{rightContent}</Appbar.Header>;
};

export default CustomHeader;
