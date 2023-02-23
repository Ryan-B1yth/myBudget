import { StyleSheet } from 'react-native';

import { Colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.Primary.grey.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  selected: {
    borderWidth: 3,
  },
});

export default styles;
