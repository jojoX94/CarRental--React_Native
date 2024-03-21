import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    gap: 32,
  },
  scrollContainer: {
    flex: 1,
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
  headerImage: {
    justifyContent: 'center',
  },
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
    gap: 32,
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
  carInfo: {
    gap: 16,
  },
  carInfoTop: {},
  carInfoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carInfoContentLeft: {
    gap: 12,
  },
  carInfoContentRight: {
    gap: 12,
  },
  ridInfo: {
    gap: 16,
  },
  ridInfoContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
  },
  ridInfoContentLeft: {
    gap: 5,
  },
  ridPoint: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    color: '#000',
    fontWeight: '600',
  },
  ridDate: {
    fontSize: 13,
    fontFamily: 'Outfit-Regular',
    color: Colors.TEXT_LIGHT_GRAY,
    fontWeight: 'normal',
  },
  ridInfoContentRight: {},
  arrow: {
    width: 20,
    height: 20,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeftTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.TEXT_LIGHT_GRAY,
  },
  footerLeft: {
    gap: 5,
  },
  footerLeftContent: {
    flexDirection: 'row',
  },
  footerLeftContentPrice: {
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    color: '#000',
  },
  footerLeftContentPriceDay: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: Colors.TEXT_LIGHT_GRAY,
  },
  footerRight: {
    borderRadius: 10,
  },
  footerRightText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.WHITE,
  },
});

export default styles;
