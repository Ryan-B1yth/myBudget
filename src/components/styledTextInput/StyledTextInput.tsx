import { View, TextInput, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useAppSelector } from '../../features/app/hooks';

const StyledTextInput = ({ title, retreiveData }: any) => {
  const userInfo = useAppSelector(state => state).userInfo;

  const [inputText, setInputText] = useState('');

  retreiveData(inputText);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={`£${userInfo.income[0].amount.toFixed(2)}`}
        style={styles.defaultTextInput}
        keyboardType="numeric"
        onChangeText={setInputText}
        value={inputText}
      />
    </View>
  );
};

export default StyledTextInput;
