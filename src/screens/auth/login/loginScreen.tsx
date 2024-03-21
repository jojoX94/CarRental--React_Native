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
import style from './loginScreenStyle';
import CustomTextfield from '../../../components/textfield/customTextfield';
import {useContext, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import FooterLinks from '../../../components/footer/footerLinks';
import {validateEmail, validatePassword} from '../../../utils/validation';
import {Colors} from '../../../constants/colors';
import LoadingButton from '../../../components/animateLoadingButton/LoadingButton';
import {Overlay} from '@rneui/themed';
import CustomButton from '../../../components/button/customButton';
import {useAuthService} from '../../../hooks/service';
import {
  AuthError,
  EmailNotVerifiedError,
  WeakPasswordError,
} from '../../../utils/errors/auth';
import {UserContext} from '../../../providers/userProvider';

function LoginScreen({navigation}: any) {
  const [showLoading, setShowLoading] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorDialogMessage, setErrorDialogMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const authService = useAuthService();
  const {setUser} = useContext(UserContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const signIn = async () => {
    try {
      setShowLoading(true);
      setIsSubmit(true);
      if (validateEmail(email) && validatePassword(password)) {
        const user = await authService.login(email.trim(), password.trim());

        if (user) {
          setUser(user);
        }
      }
      setShowLoading(false);
    } catch (error: any) {
      setShowLoading(false);
      if (error instanceof EmailNotVerifiedError) {
        console.log('Email is not verified');
        setShowEmailDialog(true);
      } else if (error instanceof WeakPasswordError) {
        console.log('Password is too weak');
      } else if (error instanceof AuthError) {
        console.log('Authentication error:', error.code);
      } else {
        setShowErrorDialog(true);
        setErrorDialogMessage('Email or password is incorrect');
        console.log('An error occurred in login:', error.message);
      }
    }
  };

  const goToRegisterScreen = () => {
    navigation.navigate('Register');
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
              <Text style={style.forgotPasswordText}>Forgot Password?</Text>
              <TouchableOpacity>
                <Text style={style.forgotPasswordLink}>Click here</Text>
              </TouchableOpacity>
            </View>
            <LoadingButton
              showLoading={showLoading}
              width={250}
              height={50}
              title={'Sign In'}
              backgroundColor={Colors.PRIMARY}
              onPress={signIn}
            />
          </View>
        </View>
        <View style={style.footer}>
          <FooterLinks
            type={'signIn'}
            title={'Sign in with'}
            subtitle={"Don't have an account"}
            buttonTitle={'Sign Up'}
            buttonAction={goToRegisterScreen}
          />
        </View>
      </ScrollView>
      <Overlay
        isVisible={showErrorDialog}
        style={style.errorDialogContainer}
        overlayStyle={style.errorDialogContainer}
        onBackdropPress={() => {
          setShowErrorDialog(false);
        }}>
        <View style={style.errorViewContainer}>
          <Image source={Assets.icons.warning} style={style.errorIcon} />
          <Text style={style.errorText}>{errorDialogMessage}</Text>
        </View>
      </Overlay>
      <Overlay
        isVisible={showEmailDialog}
        onBackdropPress={() => {
          setShowEmailDialog(false);
        }}
        overlayStyle={style.sendEmailContainer}>
        <Image source={Assets.icons.send_mail} style={style.emailImg} />
        <Text style={style.sendEmailText}>
          We have sent you an email to verify your account Please check your
          email
        </Text>
        <CustomButton
          type="filled"
          title={'Check my email'}
          onPress={() => {
            setShowEmailDialog(false);
          }}
        />
      </Overlay>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
