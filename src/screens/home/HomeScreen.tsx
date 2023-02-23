import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

import { Dashboard } from '../../components';
import { IncomeView } from '../../components';
import { ExpenseView } from '../../components';

const HomeScreen = ({ navigation }: any) => {
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
