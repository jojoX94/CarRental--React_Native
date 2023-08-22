import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const style = StyleSheet.create({
  container: {},

  wrapper: {
    paddingVertical: 0,
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
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.BLACK,
  },
  toggleVisibility: {
    width: 24,
    height: 24,
  },
  errorText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.DARK_RED,
  },
});
export default style;
