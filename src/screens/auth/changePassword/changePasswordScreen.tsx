import ForgotPasswordWrapper from '../../../components/wrapper/forgotPasswordWrapper/forgotPasswordWrapper';
import Assets from '../../../constants/assets';
import CustomTextfield from '../../../components/textfield/customTextfield';
import {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {validatePassword} from '../../../utils/validation';
import styles from './changePasswordScreenStyle';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomButton from '../../../components/button/customButton';
import Animated, {SlideInDown} from 'react-native-reanimated';

function ChangePasswordScreen() {
  const [showLoading, setShowLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showBottomSheet, setShowBottomSheet] = useState(false);

  function onSubmit() {
    setIsSubmit(true);
    setShowLoading(true);
    setShowBottomSheet(true);

    if (validatePassword(newPassword) && validatePassword(confirmPassword)) {
      console.log('success');
    } else {
      console.log('error');
    }

    setShowLoading(false);
  }

  function getBackgroundColor() {
    if (showBottomSheet) {
      return 'rgba(75,59,59,0.5)';
    } else {
      return 'transparent';
    }
  }

  return (
    <GestureHandlerRootView
      style={{flex: 1, backgroundColor: getBackgroundColor()}}>
      <ForgotPasswordWrapper
        showLoading={showLoading}
        icon={Assets.icons.my_password}
        title={'Set new password'}
        subtitle={
          'Don’t worry ! It happens . Please Input ur email to fix the issue and we will send code in the email.'
        }
        action={onSubmit}
        actionTitle={'Submit'}>
        <View style={styles.container}>
          <CustomTextfield
            onChange={setNewPassword}
            label={'New Password'}
            value={newPassword}
            error={!validatePassword(newPassword) && isSubmit}
            helperText={
              'Enter your new password below and check the hint while setting it.'
            }
          />
          <CustomTextfield
            onChange={setConfirmPassword}
            label={'Confirm Password'}
            value={newPassword}
            error={!validatePassword(confirmPassword) && isSubmit}
            helperText={
              'Please enter a valid password with 8 characters and 1 number and 1 letter'
            }
          />
        </View>
      </ForgotPasswordWrapper>
      {showBottomSheet && (
        <Animated.View
          style={styles.bottomSheetContainer}
          entering={SlideInDown.springify().damping(15)}
          exiting={SlideInDown.springify().damping(15)}>
          <Image source={Assets.icons.success} />
          <View style={styles.bottomSheetTextContainer}>
            <Text style={styles.bottomSheetTitle}>
              Password Recovery {'\n'} Successful{' '}
            </Text>
            <Text style={styles.bottomSheetSubtitle}>
              Return to the login screen to enter the application
            </Text>
          </View>
          <CustomButton
            disabled={!showBottomSheet}
            type={'filled'}
            onPress={() => {}}
            title={'Return to login'}
          />
        </Animated.View>
      )}
    </GestureHandlerRootView>
  );
}

export default ChangePasswordScreen;
