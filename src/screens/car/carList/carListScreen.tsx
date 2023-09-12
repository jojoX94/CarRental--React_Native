import {FlatList, Image, Text, View} from 'react-native';
import styles from './carListScreenStyle';
import assets from '../../../constants/assets';
import Avatar from '../../../components/avatar/avatar';
import {SearchBar} from '@rneui/themed';
import {useEffect, useState} from 'react';
import CarItem from '../../../components/carItem/carItem';
import {useCarService} from '../../../hooks/service';
import CarModel from '../../../models/carModel';

function CarListScreen() {
  const [search, setSearch] = useState('');
  const [cars, setCars] = useState<CarModel[]>([]);
  const carService = useCarService();

  useEffect(() => {
    async function getCars() {
      try {
        await carService.initialize();
        const result = await carService.getCars();
        setCars(result);
      } catch (error) {
        console.log('CarListScreen -> error', error);
      }
    }

    getCars();
  }, []);
  const updateSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Avatar
            size={46}
            source={assets.icons.pin}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: '#DBE0E4',
            }}
            iconStyle={{
              width: 18,
              height: 18,
            }}
          />
          <View style={styles.headerLeftText}>
            <Text style={styles.headerLeftTextLabel}>Your location</Text>
            <Text style={styles.headerLeftTextValue}>Manchester, UK</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Avatar size={46} source={assets.images.temp_face} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.search}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            searchIcon={
              <Image
                source={assets.icons.search}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            }
            inputContainerStyle={styles.searchInputContainer}
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
          />
        </View>
        <FlatList
          data={cars}
          renderItem={({item}) => <CarItem model={item} />}
          style={styles.list}
          contentContainerStyle={{paddingBottom: 250}}
        />
      </View>
    </View>
  );
}

export default CarListScreen;
