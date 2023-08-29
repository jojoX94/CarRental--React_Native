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
    gap: 0,
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
  dialogTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.BLACK,
  },
  dialogContentContainer: {
    maxHeight: '80%',
  },
  dialogContent: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.TEXT_LIGHT_GRAY,
  },
  dialogScroll: {
    paddingVertical: 16,
  },
  sendEmailContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
  },
  sendEmailText: {
    marginVertical: 16,
    marginBottom: 32,
    paddingHorizontal: 32,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.TEXT_LIGHT_GRAY,
  },
  emailImg: {
    width: 200,
    height: 185,
  },
});

export default style;
