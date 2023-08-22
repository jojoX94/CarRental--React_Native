import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import style from './customButtonStyle';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  type?: 'outlined' | 'filled' | 'rounded' | 'clear';
}

function CustomButton(props: Props) {
  return (
    <TouchableOpacity
      style={[
        style.container,
        props.type === 'outlined' && style.outlined,
        props.type === 'filled' && style.filled,
        props.type === 'rounded' && style.rounded,
        props.style === 'clear' && style.clear,
        props.style,
      ]}
      onPress={props.onPress}>
      <Text
        style={[
          style.title,
          props.type === 'outlined' && style.outlinedTitle,
          props.type === 'filled' && style.filledTitle,
          props.type === 'rounded' && style.roundedTitle,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  type: 'outlined',
  style: {},
};

export default CustomButton;
