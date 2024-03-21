import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  codeFiledRoot: {
    gap: 15,
  },
  cell: {
    minWidth: 58,
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: '#F6F6F6',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'Inter-SemiBold',
    color: '#000',
    borderWidth: 1,
    borderColor: 'rgba(197,190,190,0.4)',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  focusCell: {
    borderColor: '#000',
  },
  error: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.DARK_RED,
  },
});

export default styles;
