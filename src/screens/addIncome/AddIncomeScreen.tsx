import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

import BottomButton from '../../components/BottomButton/BottomButton';
import DateInput from '../../components/DateInput/DateInput';
import StyledTextInput from '../../components/StyledTextInput/StyledTextInput';
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
      <StyledTextInput
        title={'Change income'}
        value={incomeAmount}
        setIncomeAmount={setIncomeAmount}
      />
      <DateInput
        title={'Select date'}
        value={incomeDate}
        setIncomeDate={setIncomeDate}
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
