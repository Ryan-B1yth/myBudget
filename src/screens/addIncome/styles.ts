import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 20,
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
  stuckBottom: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
});

export default styles;
