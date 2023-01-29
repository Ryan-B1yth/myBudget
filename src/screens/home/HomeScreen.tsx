import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { updateTotalCapital } from '../../features/addCapital/addCapitalSlice';

import Dashboard from '../../components/dashboard/Dashboard';
import Income from '../../components/income/Income';

const HomeScreen = ({ navigation }: any) => {
  const [inputText, setInputText] = useState('Input amount');
  const dispatch = useAppDispatch();

  return (
    <View>
      <Dashboard navigation={navigation} />
      <Income navigation={navigation} />
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
    </View>
  );
};

export default HomeScreen;
