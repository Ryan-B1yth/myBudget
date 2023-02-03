import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  destination?: string;
  navigation?: any;
}

const ButtonSmall = ({ title, navigation, destination }: Props) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.btnSmall, styles.btnSmallPressed] : styles.btnSmall
      }
      children={({ pressed }) =>
        pressed ? (
          <Text style={[styles.btnSmallText, styles.btnSmallTextPressed]}>
            {title}
          </Text>
        ) : (
          <Text style={styles.btnSmallText}>{title}</Text>
        )
      }
      onPress={() => {
        destination ? navigation.navigate(destination) : null;
      }}
    />
  );
};

export default ButtonSmall;
