import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import { Colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height / 2,
  },
  mainAccountContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary.blue.main,
  },
  title: {},
  mainValue: {
    fontSize: 50,
  },
  secondaryInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50%',
    backgroundColor: Colors.Primary.green.lighter,
  },
});

export default styles;
