import React, {Fragment} from 'react';
import {Appbar, Colors} from 'react-native-paper';

const CustomHeader = ({
  title = 'default title',
  subtitle = '',
  rightContent = <Fragment />,
} = {}) => {
  const headerStyle = {backgroundColor: Colors.black};

  return (
    <Appbar.Header style={headerStyle}>
      <Appbar.Content title={title} subtitle={subtitle} style={headerStyle} />
      {rightContent}
    </Appbar.Header>
  );
};

export default CustomHeader;
