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
      <View>
        {/* <TextInput
          onChangeText={setInputText}
          placeholder="Input amount"
          value={inputText}
          keyboardType="numeric"
        />
        <Pressable
          onPress={() => dispatch(updateTotalCapital(Number(inputText)))}>
          <Text>Submit</Text>
        </Pressable> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
