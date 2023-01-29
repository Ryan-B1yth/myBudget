import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    backgroundColor: '#dddddd',
  },
  mainAccountContainer: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainValue: {
    fontSize: 50,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: '40%',
    backgroundColor: '#ffffff',
    height: 30,
    alignContent: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
  },
  btnPressed: {
    backgroundColor: '#bbbbbb',
  },
});

export default styles;
