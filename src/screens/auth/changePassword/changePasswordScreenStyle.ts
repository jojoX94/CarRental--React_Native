import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    color: Colors.TEXT_LIGHT_GRAY,
  },
  bottomSheetContainer: {
    alignItems: 'center',
    gap: 24,
    paddingVertical: 32,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.WHITE,
  },
  bottomSheetTextContainer: {
    gap: 5,
  },
  bottomSheetTitle: {
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    color: Colors.BLACK,
    textAlign: 'center',
  },
  bottomSheetSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: Colors.BLACK,
    textAlign: 'center',
  },
});

export default styles;
