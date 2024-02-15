import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './carDetailsScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Label from '../../../components/label/label';
import assets from '../../../constants/assets';
import FastImage from 'react-native-fast-image';
import CarSpecItem from '../../../components/carSpecItem/carSpecItem';
import {useState} from 'react';
import CustomButton from '../../../components/button/customButton';
import DatePicker from 'react-native-date-picker';
import {formatDate} from '../../../utils/format/dates';

function CarDetailsScreen({route}: any) {
  const {car} = route.params;
  const [startPoint, setStartPoint] = useState('Heat Throw Airport');
  const [endPoint, setEndPoint] = useState('Gatwick Airport');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [pickStartDate, setPickStartDate] = useState(false);
  const [pickEndDate, setPickEndDate] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{paddingVertical: 28}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
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
          <View style={styles.carInfo}>
            <View style={styles.carInfoTop}>
              <Text style={styles.carSpecsTitle}>Car info</Text>
            </View>
            <View style={styles.carInfoContent}>
              <View style={styles.carInfoContentLeft}>
                <Label
                  source={assets.icons.person}
                  label={`${car.numberOfSeats} Passengers`}
                />
                <Label source={assets.icons.snow} label={`Air conditioning`} />
                <Label
                  source={assets.icons.speed}
                  label={`Unlimited Milieage`}
                />
              </View>
              <View style={styles.carInfoContentRight}>
                <Label source={assets.icons.person} label={`2 Doors`} />
                <Label source={assets.icons.speed} label={`Manual`} />
                <Label
                  source={assets.icons.speed}
                  label={`Fuel info: Full to full`}
                />
              </View>
            </View>
          </View>
          <View style={styles.ridInfo}>
            <View style={styles.carInfoTop}>
              <Text style={styles.carSpecsTitle}>Pick Up & Drop Off</Text>
            </View>
            <View style={styles.ridInfoContent}>
              <View style={styles.ridInfoContentLeft}>
                <CustomButton
                  title={startPoint}
                  onPress={() => {}}
                  type="clear"
                  textStyles={styles.ridPoint}
                />

                <CustomButton
                  title={formatDate(startDate)}
                  onPress={() => {
                    setPickStartDate(true);
                  }}
                  type="clear"
                  textStyles={styles.ridDate}
                />
                <DatePicker
                  modal
                  open={pickStartDate}
                  date={startDate}
                  onConfirm={date => {
                    setPickStartDate(false);
                    setStartDate(date);
                  }}
                  onCancel={() => {
                    setPickStartDate(false);
                  }}
                />
              </View>

              <Image source={assets.icons.forward} style={styles.arrow} />

              <View style={styles.ridInfoContentRight}>
                <CustomButton
                  title={endPoint}
                  onPress={() => {}}
                  type="clear"
                  textStyles={styles.ridPoint}
                />
                <CustomButton
                  title={formatDate(endDate)}
                  onPress={() => {
                    setPickEndDate(true);
                  }}
                  type="clear"
                  textStyles={styles.ridDate}
                />
                <DatePicker
                  modal
                  open={pickEndDate}
                  date={endDate}
                  onConfirm={date => {
                    setPickEndDate(false);
                    setEndDate(date);
                  }}
                  onCancel={() => {
                    setPickEndDate(false);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CarDetailsScreen;
