import { View, TextInput, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { useAppSelector } from '../../features/app/hooks';

const StyledTextInput = ({ title }: any) => {
  const userInfo = useAppSelector(state => state).userInfo;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={`£${userInfo.income[0].amount.toFixed(2)}`}
        style={styles.defaultTextInput}
        keyboardType="numeric"
      />
    </View>
  );
};

export default StyledTextInput;
