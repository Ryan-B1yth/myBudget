import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../features/app/hooks';
import styles from './styles';

const DateInput = ({ title, retreiveData }: any) => {
  const userInfo = useAppSelector(state => state).userInfo;

  // const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={`${userInfo.income[0].dateOfPayment}`}
        style={styles.defaultTextInput}
        keyboardType="numeric"
        // onChangeText={setInputText}
        // value={inputText}
      />
    </View>
  );
};

export default DateInput;
