import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import style from './customButtonStyle';

interface Props {
  type?: 'outlined' | 'filled' | 'rounded' | 'clear';
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyles?: TextStyle;
}

function CustomButton(props: Props) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[
        style.container,
        props.type === 'outlined' && style.outlined,
        props.type === 'filled' && style.filled,
        props.type === 'rounded' && style.rounded,
        props.type === 'clear' && style.clear,
        props.style,
      ]}
      onPress={props.onPress}>
      <Text
        style={[
          style.title,
          props.type === 'outlined' && style.outlinedTitle,
          props.type === 'filled' && style.filledTitle,
          props.type === 'rounded' && style.roundedTitle,
          props.type === 'clear' && style.clearTitle,
          props.textStyles,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  type: 'outlined',
  style: {},
  textStyles: {},
  disabled: false,
};

export default CustomButton;
