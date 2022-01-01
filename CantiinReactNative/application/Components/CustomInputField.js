import React, {Fragment} from 'react';
import {Colors, TextInput} from 'react-native-paper';

const CustomInputField = ({
  label,
  mode = 'outlined',
  outlineColor = Colors.green300,
  activeOutlineColor = Colors.green700,
  style = {backgroundColor: Colors.grey100, margin: 10},
  additionalStyle={},
  placeholderTextColor = Colors.grey700,
} = {}) => {
  return (
    <TextInput
      label={label}
      //value={""}
      //onChangeText={text => setText(text)}
      mode={mode}
      outlineColor={outlineColor}
      activeOutlineColor={activeOutlineColor}
      style={{...style, ...additionalStyle}}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default CustomInputField;
