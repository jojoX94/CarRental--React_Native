import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    width: '100%',
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: Colors.GRAY,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: Colors.GRAY,
  },
  links: {
    marginBottom: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
});
export default styles;
