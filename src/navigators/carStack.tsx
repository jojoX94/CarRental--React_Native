import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CarListScreen from '../screens/car/carList/carListScreen';

const Stack = createNativeStackNavigator();

function CarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CarScreen"
        component={CarListScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default CarStack;
