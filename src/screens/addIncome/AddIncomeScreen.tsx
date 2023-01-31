import { View, Text, Pressable } from 'react-native';
import React from 'react';

import StyledTextInput from '../../components/styledTextInput/StyledTextInput';
import DateInput from '../../components/dateInput/DateInput';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import styles from './styles';

const AddIncomeScreen = () => {
  const userInfo = useAppSelector(state => state).userInfo;
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{userInfo.income[0].name}</Text>
      <StyledTextInput title={'Change income'} />
      <DateInput title={'Select date'} />
      <View style={styles.stuckBottom}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.btn, styles.btnPressed] : styles.btn
          }>
          <Text style={styles.btnText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddIncomeScreen;
