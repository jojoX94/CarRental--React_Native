import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {UserContext} from '../providers/userProvider';
import AuthStack from './authStack';
import HomeStack from './homeStack';

const Stack = createNativeStackNavigator();

function AppStack() {
  const {isAuthentificated} = useContext(UserContext);
  return (
    <Stack.Navigator>
      {isAuthentificated ? (
        <Stack.Screen
          name="Home"
          component={HomeStack}
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
