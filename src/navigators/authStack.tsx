import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/login/loginScreen';
import RegisterScreen from '../screens/auth/register/registerScreen';
import ForgotPasswordScreen from '../screens/auth/forgotPassword/forgotPasswordScreen';
import SendCodeScreen from '../screens/auth/sendCode/sendCodeScreen';
import ChangePasswordScreen from '../screens/auth/changePassword/changePasswordScreen';

function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterEmail"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SendCode"
        component={SendCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
