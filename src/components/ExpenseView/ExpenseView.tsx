import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import styles from './styles';

import { Expense } from '../';
import { useAppSelector } from '../../features/app/hooks';

const ExpenseView = ({ navigation }) => {
  const userInfo = useAppSelector(state => state).userInfo;

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={() => navigation.navigate('AddExpenseScreen')}>
          <Text style={styles.title}>Expenses</Text>
        </Pressable>
      </View>
      <FlatList
        nestedScrollEnabled
        data={userInfo.expenses}
        renderItem={({ item }) => <Expense item={item} />}
      />
    </View>
  );
};

export default ExpenseView;
