import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

import { BottomButton } from '../BottomButton';
import { DateInput } from '../DateInput';
import { StyledNumberInput } from '../StyledNumberInput';

interface Props {
  incomeName: string;
  setIncomeName: any;
  incomeAmount: string;
  setIncomeAmount: any;
  incomeDate: string;
  setIncomeDate: any;
  navigation: any;
  handleSubmitData: () => void;
  title: string;
  amountPlaceHolder: string;
  datePlaceHolder: string;
}

const IncomeForm = ({
  incomeName,
  setIncomeName,
  incomeAmount,
  setIncomeAmount,
  incomeDate,
  setIncomeDate,
  navigation,
  handleSubmitData,
  title,
  amountPlaceHolder,
  datePlaceHolder,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.mainTitle}
        value={incomeName}
        onChangeText={setIncomeName}
        placeholder={title}
      />
      <StyledNumberInput
        title={'Amount'}
        passedValue={incomeAmount}
        setPassedValue={setIncomeAmount}
        placeholder={amountPlaceHolder}
        unit={'£'}
      />
      <DateInput
        title={'Select date'}
        passedValue={incomeDate}
        setPassedValue={setIncomeDate}
        placeholder={datePlaceHolder}
      />
      <BottomButton
        title={'Submit'}
        navigation={navigation}
        destination={'HomeScreen'}
        onPress={handleSubmitData}
      />
    </View>
  );
};

export default IncomeForm;
