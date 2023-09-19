import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CarListScreen from '../screens/car/carList/carListScreen';
import CarDetailsScreen from '../screens/car/carDetails/carDetailsScreen';

const Stack = createNativeStackNavigator();

function CarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CarListScreen"
        component={CarListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CarDetailsScreen"
        component={CarDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default CarStack;
