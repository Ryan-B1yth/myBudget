import axios from 'axios';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Config from 'react-native-config';

import styles from './styles';

import { IncomeForm } from '../../components';
import BottomButton from '../../components/BottomButton/BottomButton';
import DateInput from '../../components/DateInput/DateInput';
import StyledNumberInput from '../../components/StyledNumberInput/StyledNumberInput';
import { useAppDispatch, useAppSelector } from '../../store/app/hooks';

const AddIncomeScreen = ({ navigation }) => {
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
    <IncomeForm
      handleSubmitData={handleSubmitData}
      incomeAmount={incomeAmount}
      incomeDate={incomeDate}
      incomeName={incomeName}
      setIncomeAmount={setIncomeAmount}
      setIncomeDate={setIncomeDate}
      setIncomeName={setIncomeName}
      navigation={navigation}
      title={'Income Name'}
      amountPlaceHolder={'XXXX'}
      datePlaceHolder={'31'}
    />
  );
};

export default AddIncomeScreen;
