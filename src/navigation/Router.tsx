import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AddExpenseScreen, AddIncomeScreen, HomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'AddIncomeScreen'}
        component={AddIncomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'AddExpenseScreen'}
        component={AddExpenseScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
