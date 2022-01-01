import React, {Fragment} from 'react';
import {Appbar, Colors} from 'react-native-paper';

const CustomHeader = ({
  title = 'default title',
  subtitle = '',
  rightContent = <Fragment />,
  back = undefined,
} = {}) => {
  const headerStyle = {backgroundColor: Colors.black};
  const moveBack = back ? (
    <Appbar.BackAction
      onPress={() => {
        back.pop();
      }}
    />
  ) : (
    <Fragment />
  );

  return (
    <Appbar.Header style={headerStyle}>
      {moveBack}
      <Appbar.Content title={title} subtitle={subtitle} style={headerStyle} />
      {rightContent}
    </Appbar.Header>
  );
};

export default CustomHeader;
