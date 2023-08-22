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

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
              error={email.length < 5 && isSubmit}
            />
            <CustomTextfield
              icon={Assets.icons.lock}
              label={'Password'}
              value={password}
              onChange={setPassword}
              isSecure={true}
              error={password.length < 5 && isSubmit}
            />
          </View>
          <View style={style.buttons}>
            <View style={style.forgotPassword}>
              <Text style={style.forgotPasswordText}>Forgot Password?</Text>
              <TouchableOpacity>
                <Text style={style.forgotPasswordLink}>Click here</Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              type={'filled'}
              onPress={() => {}}
              title={'Sign In'}
            />
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
