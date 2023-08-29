import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import RegisterScreen from '../screens/auth/register/registerScreen';
import {useContext} from 'react';
import {UserContext} from '../providers/userProvider';

const Stack = createNativeStackNavigator();

function AppStack() {
  const {isAuthentificated} = useContext(UserContext);
  return (
    <Stack.Navigator>
      {isAuthentificated ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Register" component={RegisterScreen} />
      )}
    </Stack.Navigator>
  );
}

export default AppStack;
