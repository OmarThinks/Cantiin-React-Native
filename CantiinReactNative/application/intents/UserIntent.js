import React, {Fragment} from 'react';
import {TextInput, Colors} from 'react-native-paper';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import CustomInputField from '../Components/CustomInputField';

export default function UserIntent() {
  return (
    <SafeAreaView style={{backgroundColor:Colors.grey400, height:"100%"}}>
      <CustomInputField
        label="Email"
        //value={""}
        //onChangeText={text => setText(text)}
      />
      <CustomInputField
        label="Password"
        //value={""}
        //onChangeText={text => setText(text)}
        secureTextEntry={true}
      />
    </SafeAreaView>
  );
}
