import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../styles';

const styles: Record<string, ViewStyle | TextStyle> = StyleSheet.create({
  btnSmall: {
    width: '40%',
    backgroundColor: Colors.Primary.grey.lighter,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnSmallText: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.Primary.grey.main,
  },
  btnSmallPressed: {
    backgroundColor: Colors.Primary.green.dark,
  },
  btnSmallTextPressed: {
    color: Colors.Primary.grey.light,
  },
});

export default styles;
