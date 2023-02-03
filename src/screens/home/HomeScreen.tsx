import React from 'react';
import { Dimensions, View } from 'react-native';

import Dashboard from '../../components/Dashboard/Dashboard';
import Income from '../../components/IncomeView/IncomeView';

const HomeScreen = ({ navigation }: any) => {
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
