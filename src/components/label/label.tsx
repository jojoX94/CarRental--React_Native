import {Colors} from '../../constants/colors';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

type LabelProps = {
  source: ImageSourcePropType;
  label: string;
};

function Label({source, label}: LabelProps) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.img} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  img: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    color: Colors.TEXT_LIGHT_GRAY,
  },
});

export default Label;
