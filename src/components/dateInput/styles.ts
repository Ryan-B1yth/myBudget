import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTextInput: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    paddingLeft: 30, // textAlign center shifts cursor to right of box
  },
  title: {
    paddingVertical: 20,
  },
});

export default styles;
