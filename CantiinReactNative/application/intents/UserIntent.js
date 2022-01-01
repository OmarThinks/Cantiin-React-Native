import React, {Fragment} from 'react';
import {Text, TextInput} from 'react-native-paper';

export default function UserIntent() {
  return (
    <Fragment>
      <Text>Heelo User</Text>
      <TextInput
      label="Email"
      //value={""}
      //onChangeText={text => setText(text)}
      mode="outlined"
    />
      <TextInput
      label="Password"
      //value={""}
      //onChangeText={text => setText(text)}
      mode="outlined"
      secureTextEntry={true}
    />
    </Fragment>
  );
}
