import React, {Fragment} from 'react';
import {TextInput, Colors} from 'react-native-paper';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';

export default function UserIntent() {
  return (
    <SafeAreaView style={{backgroundColor:Colors.grey400, height:"100%"}}>
      <TextInput
        label="Email"
        //value={""}
        //onChangeText={text => setText(text)}
        mode="outlined"
        outlineColor={Colors.green300}
        activeOutlineColor={Colors.green700}
        style={{backgroundColor:Colors.grey100}}
        placeholderTextColor={Colors.grey700}
        style={{margin:10}}
      />
      <TextInput
        label="Password"
        //value={""}
        //onChangeText={text => setText(text)}
        mode="outlined"
        outlineColor={Colors.green300}
        activeOutlineColor={Colors.green700}
        secureTextEntry={true}
      />
    </SafeAreaView>
  );
}
