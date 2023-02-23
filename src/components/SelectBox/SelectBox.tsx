import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  setPassedValue?: any;
  selected: boolean;
}

const SelectBox = ({ text, setPassedValue, selected }: Props) => {
  return (
    <Pressable
      style={[styles.container, selected ? styles.selected : null]}
      onPress={setPassedValue}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default SelectBox;
