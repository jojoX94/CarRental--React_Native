import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    gap: 32,
  },
  header: {
    gap: 32,
  },
  headerContent: {
    gap: 16,
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTextLeft: {
    gap: 8,
  },
  headerTextLeftTitle: {
    maxWidth: 150,
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  headerTextRight: {},
  headerTextLeftSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.GRAY,
  },
  headerTextStar: {
    borderRadius: 14,
    backgroundColor: Colors.WHITE,
  },
  headerImage: {},
  image: {
    width: '100%',
    height: 250,
  },
  swipe: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  swipeItemFocus: {
    width: 24,
    height: 6,
    borderRadius: 4,
    backgroundColor: Colors.PRIMARY,
  },
  swipeItem: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: Colors.LIGHT_GRAY,
    opacity: 0.5,
  },
  body: {
    gap: 16,
  },
  carSpecs: {
    gap: 16,
  },
  carSpecsTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carSpecsTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  carSpecsSeeAll: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.PRIMARY,
  },
  carSpecsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
