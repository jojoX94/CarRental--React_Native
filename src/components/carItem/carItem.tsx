import {Image, Text, View} from 'react-native';
import styles from './carItemStyle';
import CarModel from '../../models/carModel';
import {CheckBox} from '@rneui/themed';
import assets from '../../constants/assets';
import {useState} from 'react';
import FastImage from 'react-native-fast-image';
import Label from '../label/label';

type CarItemProps = {
  model: CarModel;
};

function CarItem({model}: CarItemProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerLeftName}>{model.name}</Text>
          <Text style={styles.headerLeftBrand}>{model.brand}</Text>
        </View>
        <CheckBox
          center
          checkedIcon={
            <Image source={assets.icons.favorite_filled} style={styles.icon} />
          }
          uncheckedIcon={
            <Image
              source={assets.icons.favorite_outlined}
              style={styles.icon}
            />
          }
          checked={isFavorite}
          onPress={() => setIsFavorite(!isFavorite)}
        />
      </View>
      <FastImage
        source={{uri: model.image}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Label source={assets.icons.person} label={'4'} />
          <Label source={assets.icons.gear} label={model.gearType} />
        </View>
        <View style={styles.footerRight}>
          <Text style={styles.footerRightTextValue}>£{model.price}</Text>
          <Text style={styles.footerRightText}>/day</Text>
        </View>
      </View>
    </View>
  );
}

export default CarItem;
