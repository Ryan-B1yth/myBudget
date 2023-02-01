import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

interface Props {
  title: string;
  destination?: string;
  navigation?: any;
  action?: any;
  // handler: any;
}

const BottomButton = ({ title, navigation, destination }: Props) => {
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
        destination ? navigation.navigate(destination) : null;
      }}
    />
  );
};

export default BottomButton;
