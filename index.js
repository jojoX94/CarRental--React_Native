/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import LoginScreen from './src/screens/auth/login/loginScreen';

AppRegistry.registerComponent(appName, () => LoginScreen);
