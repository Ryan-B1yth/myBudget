import { Dimensions, ViewStyle, TextStyle } from 'react-native';

const Layouts: Record<string, ViewStyle | TextStyle> = {
  fullWindowHeight: {
    height: Dimensions.get('window').height,
  },
};

export default Layouts;
