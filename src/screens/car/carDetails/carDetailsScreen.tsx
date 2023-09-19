import {Text, View} from 'react-native';
import styles from './carDetailsScreenStyles';
import {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

function CarDetailsScreen({route, navigation}) {
  const {car} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>CarDetails: {car.id}</Text>
    </SafeAreaView>
  );
}

export default CarDetailsScreen;
