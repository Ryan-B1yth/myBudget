import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useAppSelector } from '../../features/app/hooks';
import styles from './styles';

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
