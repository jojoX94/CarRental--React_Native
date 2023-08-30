import styles from './forgotPasswordWrapperStyle';
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LoadingButton from '../../animateLoadingButton/LoadingButton';
import {Colors} from '../../../constants/colors';

type ForgotPasswordWrapperProps = {
  icon: ImageSourcePropType;
  showLoading: boolean;
  children: React.ReactNode;
  title: string;
  subtitle: string;
  action: () => void;
  actionTitle: string;
};

function ForgotPasswordWrapper({
  icon,
  children,
  showLoading,
  title,
  subtitle,
  action,
  actionTitle,
}: ForgotPasswordWrapperProps) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={30}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={{flex: 1}}>
        <ScrollView style={styles.inner} contentContainerStyle={styles.scroll}>
          <View style={styles.top}>
            <View style={styles.header}>
              <Image source={icon} style={styles.icon} />
              <View style={styles.headerTextContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
              </View>
            </View>
            <View style={styles.body}>{children}</View>
          </View>
          <View style={styles.bottom}>
            <LoadingButton
              showLoading={showLoading}
              width={250}
              height={50}
              title={actionTitle}
              backgroundColor={Colors.PRIMARY}
              onPress={action}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default ForgotPasswordWrapper;
