import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcome/welcomeScreen';
import TabStack from './tabStack';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
