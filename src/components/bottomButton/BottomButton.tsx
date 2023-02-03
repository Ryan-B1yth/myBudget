import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

import { updateIncome } from '../../features/addCapital/addCapitalSlice';
import { useAppDispatch } from '../../features/app/hooks';

interface Props {
  title: string;
  destination?: string;
  navigation?: any;
  action?: any;
  data?: { incomeName: string; incomeAmount: number; incomeDate: number };
}

const BottomButton = ({ title, navigation, destination, data }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.btnStuckBottom, styles.btnStuckBottomPressed]
          : styles.btnStuckBottom
      }
      children={({ pressed }) =>
        pressed ? (
          <Text
            style={[
              styles.btnStuckBottomText,
              styles.btnStuckBottomTextPressed,
            ]}>
            {title}
          </Text>
        ) : (
          <Text style={styles.btnStuckBottomText}>{title}</Text>
        )
      }
      onPress={() => {
        dispatch(updateIncome(data));
        destination ? navigation.navigate(destination) : null;
      }}
    />
  );
};

export default BottomButton;
