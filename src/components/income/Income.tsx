import { View, Text } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../features/app/hooks';
import ButtonSmall from '../btnSmall/ButtonSmall';
import styles from './styles';

const Income = ({ navigation }: any) => {
  const userInfo = useAppSelector(state => state).userInfo;

  return (
    <View style={styles.container}>
      <View style={styles.mainAccountContainer}>
        <Text>Income</Text>
        <Text style={styles.mainValue}>
          £{userInfo.income[0].amount.toFixed(2)}
        </Text>
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
