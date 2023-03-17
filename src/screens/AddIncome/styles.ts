import { Dimensions, StyleSheet } from 'react-native';

import { Generics, Layouts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 20,
    width: '100%',
    textAlign: 'center',
  },
  btn: {
    ...Generics.btn,
  },
  btnPressed: {
    ...Generics.btnPressed,
  },
});

export default styles;
