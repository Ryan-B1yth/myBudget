import { Dimensions, StyleSheet } from 'react-native';
import { Layouts, Generics } from '../../styles';

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
  },
  btn: {
    ...Generics.btn,
  },
  btnPressed: {
    ...Generics.btnPressed,
  },
});

export default styles;
