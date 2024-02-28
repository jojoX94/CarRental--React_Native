import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './carDetailsScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Label from '../../../components/label/label';
import assets from '../../../constants/assets';
import CarSpecItem from '../../../components/carSpecItem/carSpecItem';
import {useState} from 'react';
import CustomButton from '../../../components/button/customButton';
import DatePicker from 'react-native-date-picker';
import {formatDate} from '../../../utils/format/dates';
import MapDialog from '../../../components/dialog/mapDialog';
import LocationModel from '../../../models/locationModel';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';

function CarDetailsScreen({route}: any) {
  const {car} = route.params;

  const [startLocation, setStartLocation] = useState<LocationModel>({
    latitude: 51.5074,
    longitude: 0.1278,
    label: 'London, UK',
  });
  const [endLocation, setEndLocation] = useState<LocationModel>({
    latitude: 51.5074,
    longitude: 0.1278,
    label: 'London, UK',
  });
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [pickStartDate, setPickStartDate] = useState(false);
  const [pickEndDate, setPickEndDate] = useState(false);
  const [showStartLocation, setShowStartLocation] = useState(false);
  const [showEndLocation, setShowEndLocation] = useState(false);

  const toggleStartLocation = () => {
    setShowStartLocation(!showStartLocation);
  };

  const toggleEndLocation = () => {
    setShowEndLocation(!showEndLocation);
  };

  const handleSaveStartLocation = (location: LocationModel) => {
    setStartLocation(location);
    setShowStartLocation(false);
  };

  const handleSaveEndLocation = (location: LocationModel) => {
    setEndLocation(location);
    setShowEndLocation(false);
  };

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
              <Image360Viewer
                srcset={assets.images.cars}
                width={350}
                height={200}
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
                  title={startLocation.label}
                  type="clear"
                  textStyles={styles.ridPoint}
                  onPress={() => setPickStartDate(true)}
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
                  title={endLocation.label}
                  onPress={() => setPickEndDate(true)}
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

            <View style={styles.footer}>
              <View style={styles.footerLeft}>
                <Text style={styles.footerLeftTitle}>Total</Text>
                <View style={styles.footerLeftContent}>
                  <Text style={styles.footerLeftContentPrice}>
                    ${car.price}
                  </Text>
                  <Text style={styles.footerLeftContentPriceDay}>/d</Text>
                </View>
              </View>
              <CustomButton
                style={styles.footerRight}
                textStyles={styles.footerRightText}
                type="filled"
                title="Book Now"
                onPress={() => {}}
              />
            </View>
          </View>

          {/* Dont't remove these MapDialogs  even if it's useless . It's just for references anothers projects */}
          <MapDialog
            title="Select Start Location"
            visible={showStartLocation}
            onClose={toggleStartLocation}
            onSave={handleSaveStartLocation}
            initialLocation={startLocation}
          />
          <MapDialog
            title="Select End Location"
            visible={showEndLocation}
            onClose={toggleEndLocation}
            onSave={handleSaveEndLocation}
            initialLocation={endLocation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CarDetailsScreen;
