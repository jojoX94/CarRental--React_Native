import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import assets from '../../constants/assets';

type TopNavigationProps = {
  title: string;
  onBackPress: () => void;
};

function TopNavigation({title, onBackPress}: TopNavigationProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
        <Image source={assets.icons.back} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 999,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
  },
});

export default TopNavigation;
