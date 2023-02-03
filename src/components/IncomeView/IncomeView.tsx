import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import { useAppSelector } from '../../features/app/hooks';
import ButtonSmall from '../ButtonSmall/ButtonSmall';

const Income = ({ navigation }: any) => {
  const userInfo = useAppSelector(state => state).userInfo;

  return (
    <View style={styles.container}>
      <View style={styles.mainAccountContainer}>
        <Text>
          {userInfo.income[0].name} | {userInfo.income[0].dateOfPayment}
        </Text>
        <Text style={styles.mainValue}>£{userInfo.income[0].amount}</Text>
      </View>
      <View style={styles.actions}>
        <ButtonSmall
          title={'Edit'}
          navigation={navigation}
          destination={'AddIncomeScreen'}
        />
        <ButtonSmall title={'Add'} />
      </View>
    </View>
  );
};

export default Income;
