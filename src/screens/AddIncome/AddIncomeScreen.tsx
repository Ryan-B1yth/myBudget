import axios from 'axios';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Config from 'react-native-config';

import styles from './styles';

import BottomButton from '../../components/BottomButton/BottomButton';
import DateInput from '../../components/DateInput/DateInput';
import StyledNumberInput from '../../components/StyledNumberInput/StyledNumberInput';
import { useAppDispatch, useAppSelector } from '../../store/app/hooks';

const AddIncomeScreen = ({ navigation }) => {
  // const userInfo = useAppSelector(state => state).userInfo;
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeDate, setIncomeDate] = useState('');

  const handleSubmitData = async () => {
    try {
      await axios({
        method: 'post',
        url: `${Config.BASE_URL}/addIncome`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: {
          name: incomeName,
          amount: incomeAmount,
          dateOfPayment: incomeDate,
        },
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.mainTitle}
        value={incomeName}
        onChangeText={setIncomeName}
      />
      <StyledNumberInput
        title={'Add income'}
        passedValue={incomeAmount}
        setPassedValue={setIncomeAmount}
        placeholder={''}
        unit={'£'}
      />
      <DateInput
        title={'Select date'}
        passedValue={incomeDate}
        setPassedValue={setIncomeDate}
        placeholder={31}
      />
      <BottomButton
        title={'Submit'}
        navigation={navigation}
        destination={'HomeScreen'}
        onPress={handleSubmitData}
      />
    </View>
  );
};

export default AddIncomeScreen;
