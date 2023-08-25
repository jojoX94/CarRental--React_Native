import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Assets from '../../../constants/assets';
import CustomTextfield from '../../../components/textfield/customTextfield';
import {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import FooterLinks from '../../../components/footer/footerLinks';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../../utils/validation';
import style from './registerScreenStyle';
import {Dialog} from '@rneui/themed';
import mock from '../../../../mock';
import {Colors} from '../../../constants/colors';
import LoadingButton from '../../../components/animateLoadingButton/LoadingButton';

function RegisterScreen() {
  const [showLoading, setShowLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const signUp = () => {
    setShowLoading(true);
    setIsSubmit(true);
    if (validateEmail(email) && validatePassword(password)) {
      console.log('success');
    } else {
      console.log('error');
    }

    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  };

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={30}>
      <ScrollView
        style={style.container}
        contentContainerStyle={style.contentContainer}>
        <Image source={Assets.images.cloud} style={style.backgroundImg} />
        <View style={style.header}>
          <Text style={style.title}>Welcome Back!</Text>
          <Image source={Assets.images.welcoming} />
        </View>
        <View style={style.body}>
          <View style={style.inputs}>
            <CustomTextfield
              icon={Assets.icons.profile}
              label={'Full Name'}
              value={fullName}
              onChange={setFullName}
              error={!validateName(fullName) && isSubmit}
              helperText={'Please enter a valid name'}
            />
            <CustomTextfield
              icon={Assets.icons.mail}
              label={'Email'}
              value={email}
              onChange={setEmail}
              error={!validateEmail(email) && isSubmit}
              helperText={'Please enter a valid email address'}
            />
            <CustomTextfield
              icon={Assets.icons.lock}
              label={'Password'}
              value={password}
              onChange={setPassword}
              isSecure={true}
              error={!validatePassword(password) && isSubmit}
              helperText={
                'Please enter a valid password with 8 characters and 1 number and 1 letter'
              }
            />
          </View>
          <View style={style.buttons}>
            <View style={style.forgotPassword}>
              <Text style={style.forgotPasswordText}>I agree to the CarGo</Text>
              <TouchableOpacity onPress={openDialog}>
                <Text style={style.forgotPasswordLink}>
                  {' '}
                  Terms and Conditions{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <LoadingButton
              showLoading={showLoading}
              width={250}
              height={50}
              title={'Sign Up'}
              backgroundColor={Colors.PRIMARY}
              onPress={signUp}
            />
          </View>
        </View>
        <View style={style.footer}>
          <FooterLinks
            type={'signUp'}
            title={'Sign up with'}
            subtitle={'Already have an account?'}
            buttonTitle={'sign in'}
          />
        </View>
        <Dialog
          isVisible={showDialog}
          onBackdropPress={closeDialog}
          presentationStyle={'overFullScreen'}>
          <Dialog.Title
            titleStyle={style.dialogTitle}
            title={'Terms and Conditions'}
          />
          <ScrollView
            style={style.dialogContentContainer}
            contentContainerStyle={style.dialogScroll}>
            <Text style={style.dialogContent}>{mock.termsAndConditions}</Text>
          </ScrollView>
        </Dialog>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
