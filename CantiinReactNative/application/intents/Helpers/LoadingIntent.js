import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import styles from '../../styles';

export default function LoadingIntent() {
  return (
    <SafeAreaView style={{...styles.mainContainerCenter}}>
      <ActivityIndicator size={60} color={Colors.green600} />
    </SafeAreaView>
  );
}
