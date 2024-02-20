import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';
import MAP from '../../../constants/map';
import {useMapService} from '../../../hooks/service';
import styles from './mapLocationStyle';
import {Feature} from '../../../models/featuresModel';
import LocationModel from '../../../models/locationModel';

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.

interface MapLocationProps {
  initialLocation: LocationModel;
  onLocationChange: (location: LocationModel) => void;
}

MapLibreGL.setAccessToken(null);

const MapLocation = ({initialLocation, onLocationChange}: MapLocationProps) => {
  const [currentPosition, setcurrentPosition] = useState<
    [number, number] | null
  >([45.4215, -75.6972]);

  const [searchQuery, setsearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Feature[]>([]);
  const [hideSuggestions, setHideSuggestions] = useState(false);

  const mapService = useMapService();

  useEffect(() => {
    setcurrentPosition([initialLocation.longitude, initialLocation.latitude]);
  }, [initialLocation]);

  useEffect(() => {
    async function getMapSuggestions() {
      try {
        if (searchQuery) {
          const result = await mapService.getAutocompleteSuggestions(
            searchQuery,
          );
          console.log('result', result);
          setHideSuggestions(false);
          setSuggestions(result.features);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Error fetching autocomplete suggestions', error);
      }
    }

    getMapSuggestions();
  }, [searchQuery]);

  const handlePlaceSelect = (selectedPlace: any) => {
    console.log('selectedPlace', selectedPlace);
    // setHideSuggestions(true);
    setsearchQuery(selectedPlace.properties.label);
    setcurrentPosition(selectedPlace.geometry.coordinates);
    onLocationChange({
      latitude: selectedPlace.geometry.coordinates[1],
      longitude: selectedPlace.geometry.coordinates[0],
      label: selectedPlace.properties.label,
    });
    // setHideSuggestions(true);
    setSuggestions([]);
  };

  return (
    <View style={styles.page}>
      <MapLibreGL.MapView
        style={styles.map}
        styleURL={`${MAP.STYLE_URL}?api_key=${MAP.API_KEY}`}>
        {currentPosition && (
          <MapLibreGL.Camera
            zoomLevel={5}
            pitch={50}
            centerCoordinate={currentPosition}
          />
        )}
        {currentPosition && (
          <MapLibreGL.PointAnnotation
            id="currentPosition"
            coordinate={currentPosition}
            children={<View />}
          />
        )}
      </MapLibreGL.MapView>
      {/* Suggestions */}
      <View style={styles.suggestions}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search A place .."
          onChangeText={text => setsearchQuery(text)}
          value={searchQuery}
        />
        {!hideSuggestions && (
          <FlatList
            data={suggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => handlePlaceSelect(item)}>
                <Text>{item.properties.label}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default MapLocation;
