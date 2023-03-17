import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

import { Dashboard, ExpenseView, IncomeView } from '../../components';

const getData = async () => {
  const response = await fetch('/');
  console.log(response);
  return response;
};

const HomeScreen = ({ navigation }: any) => {
  // getData();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Dashboard />
      <IncomeView navigation={navigation} />
      <ExpenseView navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;
