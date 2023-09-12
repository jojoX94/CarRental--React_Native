import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  text: {
    paddingHorizontal: 16,
    color: Colors.WHITE,
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
