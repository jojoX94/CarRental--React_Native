import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    gap: 0,
  },
  headerLeftName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: 'black',
  },
  headerLeftBrand: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.LIGHT_GRAY,
  },
  icon: {
    width: 28,
    height: 28,
  },
  image: {
    width: '100%',
    height: 200,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },

  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerRightText: {},
  footerRightTextValue: {
    fontFamily: 'Inter-Medium',
    fontSize: 24,
    color: 'black',
  },
});

export default styles;
