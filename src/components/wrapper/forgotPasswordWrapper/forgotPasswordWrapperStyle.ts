import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 40,
  },
  scroll: {
    paddingTop: 40,
    paddingBottom: 70,
    justifyContent: 'space-between',
    gap: 50,
  },
  top: {
    gap: 46,
  },
  header: {
    gap: 40,
  },
  icon: {},
  headerTextContainer: {
    gap: 7,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Outfit-SemiBold',
    color: Colors.BLACK,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    color: Colors.TEXT_LIGHT_GRAY,
  },
  body: {},

  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
