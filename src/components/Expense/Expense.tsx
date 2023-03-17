import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import { PaymentFrequency } from '../../store/addCapital/addCapitalSlice';

const Expense = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.name]}>{item.name}</Text>
      <View>
        <Text style={[styles.text, styles.amount]}>
          £{item.amount}
          <Text style={styles.textSmall}>
            /{item.frequency === PaymentFrequency.weekly ? 'w' : 'm'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Expense;
