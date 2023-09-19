import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const searchBackground = 'hsl(0, 0%, 89%)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  headerLeftText: {
    gap: 0,
  },
  headerLeftTextLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.TEXT_LIGHT_GRAY,
  },
  headerLeftTextValue: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'black',
  },
  headerRight: {},
  body: {},
  search: {},
  searchInputContainer: {
    borderWidth: 0,
    backgroundColor: searchBackground,
  },
  searchContainer: {
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    backgroundColor: searchBackground,
  },
  searchInput: {
    borderWidth: 0,
    fontFamily: 'Outfit-Regular',
    fontSize: 17,
    color: 'black',
  },
  list: {},
});

export default styles;
