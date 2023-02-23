import React, { useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';

import styles from './styles';

import {
  BottomButton,
  HorizontalView,
  SelectBox,
  StyledNumberInput,
} from '../../components';
import { DateInput } from '../../components/DateInput';
import {
  PaymentDay,
  PaymentFrequency,
  addExpense,
} from '../../features/addCapital/addCapitalSlice';

const AddExpenseScreen = ({ navigation }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [isWeekly, setIsWeekly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSelected = () => {
    if (isWeekly) {
      setIsWeekly(false);
      setIsMonthly(true);
      return;
    }
    setIsWeekly(true);
    setIsMonthly(false);
  };

  const isDaySelected = checkDay => {
    return selectedDays.includes(checkDay);
  };

  const handleAddDay = addedDay => {
    if (isDaySelected(addedDay)) {
      setSelectedDays(selectedDays.filter(i => i !== addedDay));
      return;
    }
    setSelectedDays([...selectedDays, addedDay]);
  };

  const collectData = () => {
    let data = {
      id: uuid.v4(),
      name: expenseName,
      amount: expenseAmount,
      frequency: isWeekly ? PaymentFrequency.weekly : PaymentFrequency.monthly,
    };
    isWeekly
      ? (data = { ...data, ...{ dayOfPayment: selectedDays } })
      : (data = { ...data, ...{ dayOfPayment: expenseDate } });
    return data;
  };

  const renderMonthly = () => {
    return (
      <DateInput
        title={'Date'}
        passedValue={expenseDate}
        setPassedValue={setExpenseDate}
        placeholder={31}
      />
    );
  };

  const renderWeekly = () => {
    return (
      <>
        <HorizontalView>
          <SelectBox
            text={PaymentDay.monday}
            setPassedValue={() => handleAddDay(PaymentDay.monday)}
            selected={isDaySelected(PaymentDay.monday)}
          />
          <SelectBox
            text={PaymentDay.tuesday}
            setPassedValue={() => handleAddDay(PaymentDay.tuesday)}
            selected={isDaySelected(PaymentDay.tuesday)}
          />
        </HorizontalView>
        <HorizontalView>
          <SelectBox
            text={PaymentDay.wednesday}
            setPassedValue={() => handleAddDay(PaymentDay.wednesday)}
            selected={isDaySelected(PaymentDay.wednesday)}
          />
          <SelectBox
            text={PaymentDay.thursday}
            setPassedValue={() => handleAddDay(PaymentDay.thursday)}
            selected={isDaySelected(PaymentDay.thursday)}
          />
        </HorizontalView>
        <HorizontalView>
          <SelectBox
            text={PaymentDay.friday}
            setPassedValue={() => handleAddDay(PaymentDay.friday)}
            selected={isDaySelected(PaymentDay.friday)}
          />
          <SelectBox
            text={PaymentDay.saturday}
            setPassedValue={() => handleAddDay(PaymentDay.saturday)}
            selected={isDaySelected(PaymentDay.saturday)}
          />
        </HorizontalView>
        <HorizontalView>
          <SelectBox
            text={PaymentDay.sunday}
            setPassedValue={() => handleAddDay(PaymentDay.sunday)}
            selected={isDaySelected(PaymentDay.sunday)}
          />
        </HorizontalView>
      </>
    );
  };

  return (
    <ScrollView>
      <TextInput
        style={styles.mainTitle}
        placeholder="Name..."
        value={expenseName}
        onChangeText={setExpenseName}
      />
      <StyledNumberInput
        title={'Amount'}
        passedValue={expenseAmount}
        setPassedValue={setExpenseAmount}
        placeholder={'0.00'}
      />
      <HorizontalView>
        <SelectBox
          text={'Weekly'}
          setPassedValue={handleSelected}
          selected={isWeekly}
        />
        <SelectBox
          text={'Monthly'}
          setPassedValue={handleSelected}
          selected={isMonthly}
        />
      </HorizontalView>

      {isWeekly ? renderWeekly() : renderMonthly()}

      <BottomButton
        title={'Submit'}
        action={addExpense}
        data={collectData()}
        navigation={navigation}
        destination={'HomeScreen'}
      />
    </ScrollView>
  );
};

export default AddExpenseScreen;
