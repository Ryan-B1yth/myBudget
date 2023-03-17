import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

import { useAppSelector } from '../../store/app/hooks';

interface Props {
  title: string;
  passedValue: any;
  setPassedValue: any;
  placeholder: string | number;
  unit?: string;
}

const StyledNumberInput = ({
  title,
  passedValue,
  setPassedValue,
  placeholder,
}: Props) => {
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

export default StyledNumberInput;
