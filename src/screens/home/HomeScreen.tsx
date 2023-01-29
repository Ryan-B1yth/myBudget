import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { updateTotalCapital } from '../../features/addCapital/addCapitalSlice';

const HomeScreen = () => {
  const [inputText, setInputText] = useState('Input amount');
  const storage = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  // const date = new Date();
  // const year = date.getUTCFullYear();
  // const month = date.getUTCMonth() + 1;
  // const day = date.getUTCDate();
  // const hour = date.getUTCHours();
  // const minute = date.getUTCMinutes();
  // const second = date.getUTCSeconds();
  // const dateStamp = `${year}-${month}-${day}-${hour}-${minute}-${second}`;

  return (
    <View>
      <View>
        <Text>{storage.userInfo.totalCapital}</Text>
        <TextInput
          onChangeText={setInputText}
          placeholder="Input amount"
          value={inputText}
        />
        <Pressable
          onPress={() => dispatch(updateTotalCapital(parseInt(inputText)))}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
