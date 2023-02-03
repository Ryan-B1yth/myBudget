import { View, Text } from 'react-native';
import React, { useState } from 'react';

import StyledTextInput from '../../components/StyledTextInput/StyledTextInput';
import DateInput from '../../components/DateInput/DateInput';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import BottomButton from '../../components/BottomButton/BottomButton';
import styles from './styles';

const AddIncomeScreen = ({ navigation }) => {
  const userInfo = useAppSelector(state => state).userInfo;
  const [incomeAmount, setIncomeAmount] = useState(userInfo.income[0].amount);
  const [incomeDate, setIncomeDate] = useState(
    userInfo.income[0].dateOfPayment,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{userInfo.income[0].name}</Text>
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
        data={{ incomeAmount: incomeAmount, incomeDate: incomeDate }}
      />
    </View>
  );
};

export default AddIncomeScreen;
