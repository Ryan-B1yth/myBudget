import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../features/app/hooks';
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
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.btn, styles.btnPressed] : styles.btn
          }
          onPress={() => navigation.navigate('AddIncomeScreen')}>
          <Text style={styles.btnText}>Edit</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Income;
