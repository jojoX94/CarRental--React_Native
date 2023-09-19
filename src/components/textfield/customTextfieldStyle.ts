import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {isIOS} from '@rneui/base';

const style = StyleSheet.create({
  container: {},

  wrapper: {
    paddingVertical: isIOS ? 16 : 0,
    paddingHorizontal: 11,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    borderColor: Colors.BLACK,
    borderWidth: 1,
    borderRadius: 6,
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter-Light',
    color: Colors.BLACK,
  },
  toggleVisibility: {
    width: 20,
    height: 20,
  },
  errorText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.DARK_RED,
  },
});
export default style;
