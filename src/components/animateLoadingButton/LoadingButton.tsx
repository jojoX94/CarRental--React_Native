import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, Animated, Pressable, View} from 'react-native';

interface LoadingButtonProps {
  showLoading: boolean;
  width: number;
  height: number;
  title: string;
  backgroundColor: string;
  onPress: () => void;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  showLoading,
  width,
  height,
  title,
  backgroundColor,
  onPress,
}) => {
  const widthValue = useRef(new Animated.Value(width)).current;
  const borderRadiusValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (showLoading) {
      _loadingAnimation(width, height, height / 2, 0, 1);
    } else {
      _loadingAnimation(height, width, 8, 0, 1);
    }
  }, [showLoading]);

  const _loadingAnimation = (
    widthStart: number,
    widthEnd: number,
    borderRadiusEnd: number,
    opacityStart: number,
    opacityEnd: number,
  ) => {
    widthValue.setValue(widthStart);
    borderRadiusValue.setValue(0);
    opacityValue.setValue(opacityStart);

    Animated.timing(widthValue, {
      toValue: widthEnd,
      duration: 400,
      useNativeDriver: false,
    }).start();

    Animated.timing(borderRadiusValue, {
      toValue: borderRadiusEnd,
      duration: 400,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacityValue, {
      toValue: opacityEnd,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Pressable onPress={onPress}>
        <Animated.View
          style={[
            {
              width: widthValue,
              height,
              backgroundColor,
              justifyContent: 'center',
              borderRadius: borderRadiusValue,
            },
          ]}>
          {showLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Animated.Text
              style={[
                {
                  fontSize: 16,
                  fontWeight: 'bold',
                  opacity: opacityValue,
                  color: 'white',
                  textAlign: 'center',
                },
              ]}>
              {title}
            </Animated.Text>
          )}
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default LoadingButton;
