import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';

import { updateIncome } from '../../features/addCapital/addCapitalSlice';
import { useAppDispatch } from '../../features/app/hooks';

interface Props {
  title: string;
  destination?: string;
  navigation?: any;
  action?: any;
  data?: any;
}

const BottomButton = ({
  title,
  navigation,
  destination,
  action,
  data,
}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
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
          dispatch(action(data));
          destination ? navigation.navigate(destination) : null;
        }}
      />
    </View>
  );
};

export default BottomButton;
