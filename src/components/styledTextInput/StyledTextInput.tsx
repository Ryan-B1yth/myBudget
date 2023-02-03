import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

import { useAppSelector } from '../../features/app/hooks';

const StyledTextInput = ({ title, incomeAmount, setIncomeAmount }: any) => {
  const userInfo = useAppSelector(state => state).userInfo;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={`£${userInfo.income[0].amount}`}
        style={styles.defaultTextInput}
        keyboardType="numeric"
        onChangeText={setIncomeAmount}
        value={incomeAmount}
      />
    </View>
  );
};

export default StyledTextInput;
