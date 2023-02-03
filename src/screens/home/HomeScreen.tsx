import { View, Text, TextInput, Pressable, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { updateTotalCapital } from '../../features/addCapital/addCapitalSlice';

import Dashboard from '../../components/Dashboard/Dashboard';
import Income from '../../components/Income/Income';
import { Layouts } from '../../../src/styles';

const HomeScreen = ({ navigation }: any) => {
  const [inputText, setInputText] = useState('Input amount');
  const dispatch = useAppDispatch();

  return (
    <View style={{ height: Dimensions.get('window').height }}>
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
