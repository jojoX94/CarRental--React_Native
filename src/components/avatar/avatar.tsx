import React from 'react';
import {View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';

type AvatarProps = {
  source: ImageSourcePropType;
  size: number;
  label?: string;
  containerStyle?: object;
  iconStyle?: object;
};

const Avatar = ({
  source,
  size,
  label,
  containerStyle,
  iconStyle,
}: AvatarProps) => {
  return (
    <View
      style={[styles.container, {width: size, height: size}, containerStyle]}>
      <Image source={source} style={[styles.image, iconStyle]} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

Avatar.defaultProps = {
  label: '',
  containerStyle: {},
  iconStyle: {},
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100, // Make it round
    overflow: 'hidden', // Clip the image to the rounded container
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray', // You can set a default background color
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for label
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontSize: 12,
  },
});

export default Avatar;
