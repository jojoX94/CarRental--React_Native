import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './carListScreenStyle';
import assets from '../../../constants/assets';
import Avatar from '../../../components/avatar/avatar';
import {SearchBar} from '@rneui/themed';
import {useEffect, useState} from 'react';
import {useCarService} from '../../../hooks/service';
import CarModel from '../../../models/carModel';
import CarItemSkeleton from '../../../components/skeleton/carItemSkeleton/carItemSkeleton';
import CarItem from '../../../components/carItem/carItem';
import {SafeAreaView} from 'react-native-safe-area-context';

function CarListScreen({navigation}: any) {
  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState('');
  const [cars, setCars] = useState<CarModel[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarModel[]>([]);

  const carService = useCarService();

  useEffect(() => {
    async function getCars() {
      try {
        setIsLoading(true);

        await carService.initialize();
        const result = await carService.getCars();
        setCars(result);
        setFilteredCars(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('CarListScreen -> error', error);
      }
    }

    getCars();
  }, []);
  const updateSearch = (value: string) => {
    setSearch(value);
    const filtered = cars.filter(car => {
      return car.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredCars(filtered);
  };

  const renderSearchIcon = () => {
    return (
      <Image
        source={assets.icons.search}
        style={{
          width: 24,
          height: 24,
        }}
      />
    );
  };

  const renderClearIcon = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSearch('');
          setFilteredCars(cars);
        }}>
        <Image
          source={assets.icons.clear}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderCarLoading = () => {
    return (
      <FlatList
        data={[1, 2]}
        renderItem={() => <CarItemSkeleton />}
        style={styles.list}
        contentContainerStyle={{paddingBottom: 250}}
      />
    );
  };

  const renderCarList = () => {
    return (
      <FlatList
        data={filteredCars}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onPressCarItem(item)}>
            <CarItem model={item} />
          </TouchableOpacity>
        )}
        style={styles.list}
        contentContainerStyle={{paddingBottom: 250}}
      />
    );
  };

  const onPressCarItem = (car: CarModel) => {
    console.log('CarListScreen -> car', car);
    navigation.navigate('CarDetailsScreen', {car});
  };

  return (
    <SafeAreaView style={styles.container}>
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
            searchIcon={renderSearchIcon()}
            clearIcon={search.length > 0 && renderClearIcon()}
            inputContainerStyle={styles.searchInputContainer}
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
          />
        </View>

        {isLoading ? renderCarLoading() : renderCarList()}
      </View>
    </SafeAreaView>
  );
}

export default CarListScreen;
