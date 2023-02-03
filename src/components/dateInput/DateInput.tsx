import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

import { useAppSelector } from '../../features/app/hooks';

const DateInput = ({ title, incomeDate, setIncomeDate }: any) => {
  const userInfo = useAppSelector(state => state).userInfo;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={`${userInfo.income[0].dateOfPayment}`}
        style={styles.defaultTextInput}
        keyboardType="numeric"
        onChangeText={setIncomeDate}
        value={incomeDate}
      />
    </View>
  );
};

export default DateInput;
