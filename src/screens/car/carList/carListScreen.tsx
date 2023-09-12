import {Image, Text, View} from 'react-native';
import styles from './carListScreenStyle';
import assets from '../../../constants/assets';
import Avatar from '../../../components/avatar/avatar';
import {SearchBar} from '@rneui/themed';
import {useState} from 'react';
import CarItem from '../../../components/carItem/carItem';

function CarListScreen() {
  const [search, setSearch] = useState('');

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
        <CarItem
          model={{
            name: 'Model 3',
            brand: 'Tesla',
            image:
              'https://cdn.jdpower.com/ChromeImageGallery/Expanded/White/320/2023PRC16_320/2023PRC160013_320_01.jpg',
            price: 100,
            rating: 4.5,
            isFavourite: false,
            gearType: 'Auto',
            fuelType: 'Electric',
            color: 'Red',
            numberOfSeats: 4,
          }}
        />
      </View>
    </View>
  );
}

export default CarListScreen;
