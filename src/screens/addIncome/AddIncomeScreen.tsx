import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

import BottomButton from '../../components/BottomButton/BottomButton';
import DateInput from '../../components/DateInput/DateInput';
import StyledNumberInput from '../../components/StyledNumberInput/StyledNumberInput';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';

const AddIncomeScreen = ({ navigation }) => {
  const userInfo = useAppSelector(state => state).userInfo;
  const [incomeName, setIncomeName] = useState(userInfo.income[0].name);
  const [incomeAmount, setIncomeAmount] = useState(userInfo.income[0].amount);
  const [incomeDate, setIncomeDate] = useState(
    userInfo.income[0].dateOfPayment,
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.mainTitle}
        value={incomeName}
        onChangeText={setIncomeName}
      />
      <StyledNumberInput
        title={'Change income'}
        passedValue={incomeAmount}
        setPassedValue={setIncomeAmount}
        placeholder={userInfo.income[0].amount}
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
        data={{
          incomeName: incomeName,
          incomeAmount: incomeAmount,
          incomeDate: incomeDate,
        }}
      />
    </View>
  );
};

export default AddIncomeScreen;
