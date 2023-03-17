import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  destination?: string;
  navigation?: any;
  onPress?: () => void;
}

const ButtonSmall = ({ title, navigation, destination, onPress }: Props) => {
  const handleOnPress = () => {
    onPress && onPress();
    navigation.navigate(destination);
  };

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
      onPress={handleOnPress}
    />
  );
};

export default ButtonSmall;
