import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './customTextfieldStyle';
import {Colors} from '../../constants/colors';
import Assets from '../../constants/assets';

type propsType = {
  icon: ImageSourcePropType;
  label: string;
  value: string;
  onChange: (text: string) => void;
  isSecure?: boolean;
  error?: boolean;
  helperText?: string;
};

function CustomTextfield(props: propsType) {
  const {label, icon, value, onChange, isSecure, error, helperText, ...other} =
    props;

  const [focused, setFocused] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const getBorderColor = () => {
    if (error) {
      return Colors.RED;
    }

    if (focused) {
      return Colors.PRIMARY;
    } else {
      return Colors.GRAY;
    }
  };

  return (
    <View style={style.container}>
      <View style={[style.wrapper, {borderColor: getBorderColor()}]}>
        <Image source={icon} style={style.icon} />
        <TextInput
          style={style.input}
          placeholder={label}
          value={value}
          onChangeText={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          secureTextEntry={isSecureEntry}
          placeholderTextColor={Colors.GRAY}
          {...other}
        />
        {isSecure && (
          <TouchableOpacity
            onPress={() => {
              setIsSecureEntry(!isSecureEntry);
            }}>
            {isSecureEntry ? (
              <Image
                source={Assets.icons.eye_off}
                style={style.toggleVisibility}
              />
            ) : (
              <Image source={Assets.icons.eye} style={style.toggleVisibility} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={style.errorText}>{helperText}</Text>}
    </View>
  );
}

CustomTextfield.defaultProps = {
  isSecure: false,
  error: false,
  helperText: '',
};

export default CustomTextfield;
