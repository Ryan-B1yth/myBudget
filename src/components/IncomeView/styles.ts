import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import { Colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    backgroundColor: Colors.Primary.orange.light,
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
});

export default styles;
