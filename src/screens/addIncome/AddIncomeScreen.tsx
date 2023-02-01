import { View, Text } from 'react-native';
import React from 'react';

import StyledTextInput from '../../components/styledTextInput/StyledTextInput';
import DateInput from '../../components/dateInput/DateInput';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import BottomButton from '../../components/bottomButton/BottomButton';
import styles from './styles';
import { updateIncome } from '../../features/addCapital/addCapitalSlice';

const AddIncomeScreen = ({ navigation }) => {
  const userInfo = useAppSelector(state => state).userInfo;
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{userInfo.income[0].name}</Text>
      <StyledTextInput title={'Change income'} />
      <DateInput title={'Select date'} />
      <BottomButton
        title={'Submit'}
        navigation={navigation}
        destination={'HomeScreen'}
      />
    </View>
  );
};

export default AddIncomeScreen;
