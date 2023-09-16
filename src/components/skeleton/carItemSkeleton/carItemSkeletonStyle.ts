import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 16,
    gap: 16,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    gap: 5,
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
