import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

import { useAppSelector } from '../../features/app/hooks';

interface Props {
  title: string;
  passedValue: string | number | any;
  setPassedValue: any;
  placeholder: string | number;
}

const DateInput = ({
  title,
  passedValue,
  setPassedValue,
  placeholder,
}: Props) => {
  const userInfo = useAppSelector(state => state).userInfo;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={`${placeholder}`}
        style={styles.defaultTextInput}
        keyboardType="numeric"
        onChangeText={setPassedValue}
        value={passedValue}
      />
    </View>
  );
};

export default DateInput;
