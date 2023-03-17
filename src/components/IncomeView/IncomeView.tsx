import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Config from 'react-native-config';

import styles from './styles';

import { ButtonSmall } from '../';
import { useAppSelector } from '../../store/app/hooks';

const IncomeView = ({ navigation }: any) => {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const handleMainIncome = async () => {
    const response = await axios({
      method: 'get',
      url: `${Config.BASE_URL}/getMainIncome`,
    });
    const income = response.data[0];

    setName(income.name);
    setAmount(income.amount);
    return response;
  };

  useEffect(() => {
    handleMainIncome();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainAccountContainer}>
        <Text>{name}</Text>
        <Text style={styles.mainValue}>£{amount}</Text>
      </View>
      <View style={styles.actions}>
        <ButtonSmall title={'Edit'} />
        <ButtonSmall
          title={'Add'}
          navigation={navigation}
          destination={'AddIncomeScreen'}
        />
      </View>
    </View>
  );
};

export default IncomeView;
