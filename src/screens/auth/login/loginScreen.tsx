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
import {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import CustomButton from '../../../components/button/customButton';
import FooterLinks from '../../../components/footer/footerLinks';
import {validateEmail, validatePassword} from '../../../utils/validation';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const signIn = () => {
    setIsSubmit(true);
    if (validateEmail(email) && validatePassword(password)) {
      console.log('success');
    } else {
      console.log('error');
    }
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
            <CustomButton type={'filled'} onPress={signIn} title={'Sign In'} />
          </View>
        </View>
        <View style={style.footer}>
          <FooterLinks
            type={'signIn'}
            title={'Sign in with'}
            subtitle={"Don't have an account"}
            buttonTitle={'Sign Up'}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
