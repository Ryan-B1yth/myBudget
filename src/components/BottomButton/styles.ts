import { Dimensions, StyleSheet } from 'react-native';

import { Colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  btnStuckBottom: {
    backgroundColor: Colors.Primary.green.light,
    color: Colors.Primary.green.dark,
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '85%',
    // bottom: 100,
    borderRadius: 5,
  },
  btnStuckBottomPressed: {
    backgroundColor: Colors.Primary.green.dark,
  },
  btnStuckBottomText: {
    color: Colors.Primary.green.dark,
    fontSize: 20,
  },
  btnStuckBottomTextPressed: {
    color: Colors.Primary.grey.light,
  },
});

export default styles;
