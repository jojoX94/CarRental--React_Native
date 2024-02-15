import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  outlined: {
    borderWidth: 1,
    borderColor: '#000',
  },
  outlinedTitle: {
    color: '#000',
  },
  filled: {
    width: '70%',
    paddingVertical: 15,
    backgroundColor: Colors.PRIMARY,
  },

  filledTitle: {
    color: '#fff',
  },
  rounded: {
    borderRadius: 50,
  },
  roundedTitle: {
    color: '#fff',
  },
  clear: {
    height: 20,
    backgroundColor: 'transparent',
  },
  clearTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.GRAY,
  },
});

export default style;
