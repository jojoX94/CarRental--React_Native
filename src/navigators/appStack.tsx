import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {UserContext} from '../providers/userProvider';
import AuthStack from './authStack';
import WelcomeScreen from '../screens/welcome/welcomeScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  const {isAuthentificated} = useContext(UserContext);
  return (
    <Stack.Navigator>
      {isAuthentificated ? (
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}

export default AppStack;
