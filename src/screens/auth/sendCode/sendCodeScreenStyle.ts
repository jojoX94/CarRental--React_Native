import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    color: Colors.TEXT_LIGHT_GRAY,
  },
  resendCode: {
    fontSize: 14,
    fontFamily: 'Outfit-Bold',
    color: Colors.BLACK,
    opacity: 0.9,
  },
});
export default styles;
