import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import {useContext} from 'react';
import {UserContext} from '../providers/userProvider';
import AuthStack from './authStack';

const Stack = createNativeStackNavigator();

function AppStack() {
  const {isAuthentificated} = useContext(UserContext);
  return (
    <Stack.Navigator>
      {isAuthentificated ? (
        <Stack.Screen name="Home" component={HomeScreen} />
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
