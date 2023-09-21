import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './carDetailsScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopNavigation from '../../../components/topNavigation/topNavigation';
import {useNavigation} from '@react-navigation/native';
import Label from '../../../components/label/label';
import assets from '../../../constants/assets';
import FastImage from 'react-native-fast-image';
import CarSpecItem from '../../../components/carSpecItem/carSpecItem';

function CarDetailsScreen({route}: any) {
  const {car} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TopNavigation
          title={'Car details'}
          onBackPress={() => {
            console.log('CarDetailsScreen -> navigation', navigation);
            navigation.goBack();
          }}
        />
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <View style={styles.headerTextLeft}>
              <Text style={styles.headerTextLeftTitle}>{car.name}</Text>
              <Text style={styles.headerTextLeftSubtitle}>{car.brand}</Text>
            </View>
            <View style={styles.headerTextRight}>
              <View style={styles.headerTextStar}>
                <Label
                  source={assets.icons.star}
                  label={car.rating}
                  labelStyle={{fontSize: 12, color: '#FFD148'}}
                  style={{gap: 4, paddingVertical: 6, paddingHorizontal: 10}}
                />
              </View>
            </View>
          </View>
          <View style={styles.headerImage}>
            <Image
              source={assets.images.dodge}
              style={styles.image}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.swipe}>
              <View style={styles.swipeItemFocus} />
              <View style={styles.swipeItem} />
              <View style={styles.swipeItem} />
              <View style={styles.swipeItem} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.carSpecs}>
          <View style={styles.carSpecsTop}>
            <Text style={styles.carSpecsTitle}>Car specs</Text>
            <TouchableOpacity>
              <Text style={styles.carSpecsSeeAll}>See More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.carSpecsContent}>
            <CarSpecItem
              title={'Max. Power'}
              value={car.maxPower}
              label={'hp'}
            />
            <CarSpecItem
              title={'0-60 mph'}
              value={car.acceleration}
              label={'hp'}
            />
            <CarSpecItem
              title={'Top Spped'}
              value={car.maxSpeed}
              label={'mph'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CarDetailsScreen;
