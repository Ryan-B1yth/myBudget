import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

import styles from './styles';

import { Expense } from '../';
import { useAppSelector } from '../../features/app/hooks';

const ExpenseView = () => {
  const userInfo = useAppSelector(state => state).userInfo;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>
      <FlatList
        nestedScrollEnabled
        data={userInfo.expenses}
        renderItem={({ item }) => <Expense item={item} />}
      />
    </View>
  );
};

export default ExpenseView;
