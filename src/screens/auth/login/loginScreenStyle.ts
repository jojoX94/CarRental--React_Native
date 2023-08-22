import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  contentContainer: {
    paddingBottom: 32,
  },
  backgroundImg: {
    position: 'absolute',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 170,
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.BLACK,
  },
  body: {
    paddingHorizontal: 32,
    marginBottom: 60,
    gap: 30,
  },
  inputs: {
    gap: 16,
  },
  buttons: {
    alignItems: 'center',
    gap: 16,
  },
  forgotPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 34,
  },
  forgotPasswordText: {
    fontSize: 11,
    fontFamily: 'Inter-Regular',
  },
  forgotPasswordLink: {
    fontSize: 11,
    color: Colors.BLUE,
  },
  footer: {
    paddingHorizontal: 32,
  },
  footerText: {},
});

export default style;
