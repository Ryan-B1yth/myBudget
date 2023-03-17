import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';

import { updateIncome } from '../../store/addCapital/addCapitalSlice';
import { useAppDispatch } from '../../store/app/hooks';

interface Props {
  title: string;
  destination?: string;
  navigation?: any;
  onPress?: () => void;
}

const BottomButton = ({ title, navigation, destination, onPress }: Props) => {
  // const dispatch = useAppDispatch();

  const handleOnPress = () => onPress && onPress();

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
        onPress={handleOnPress}
      />
    </View>
  );
};

export default BottomButton;
