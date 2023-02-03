import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
  },
  textSmall: {
    fontSize: 16,
  },
  name: {},
  amount: {
    fontWeight: '600',
  },
});

export default styles;
