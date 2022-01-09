import React, {Fragment} from 'react';
import {Colors, TextInput} from 'react-native-paper';
import {View} from 'react-native';
import ErrorText from './ErrorText';

const CustomInputField = ({
  label,
  outlineColor = Colors.green400,
  activeOutlineColor = Colors.green900,
  style = {backgroundColor: Colors.grey100},
  additionalStyle = {},
  placeholderTextColor = Colors.black,
  secureTextEntry = false,
  fontSize = 20,
  setText,
  keyboardType = 'default',
  error = '',
} = {}) => {
  return (
    <View style={{margin: 10}}>
      <TextInput
        label={label}
        //value={""}
        onChangeText={text => setText(text)}
        underlineColor={outlineColor}
        activeUnderlineColor={activeOutlineColor}
        style={{...style, ...additionalStyle, fontSize}}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        error={error}
        //dense={true}
      />
      <ErrorText error={error} input={true}/>
    </View>
  );
};

export default CustomInputField;
