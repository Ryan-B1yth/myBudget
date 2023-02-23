import { StyleSheet } from 'react-native';

import { Colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTextInput: {
    width: '90%',
    height: 75,
    borderWidth: 1,
    borderColor: Colors.Primary.grey.light,
    borderRadius: 20,
    paddingLeft: 20,
  },
  title: {
    paddingVertical: 20,
  },
});

export default styles;
