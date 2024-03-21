import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CarListScreen from '../screens/car/carList/carListScreen';
import CarDetailsScreen from '../screens/car/carDetails/carDetailsScreen';
import React from 'react';
import {tabBarOptions} from './tabStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Button} from 'react-native';
import assets from '../constants/assets';
import {Colors} from '../constants/colors';

const Stack = createNativeStackNavigator();

function CarStack({navigation, route}: any) {
  const tabHiddenRoutes = ['CarDetailsScreen'];

  React.useLayoutEffect(() => {
    if (
      tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route) as string)
    ) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: tabBarOptions.tabBarStyle,
      });
    }
  }, [navigation, route]);

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
        options={({route}) => ({
          title: 'Car details',
          headerBackImageSource: assets.icons.back,
          headerTitleAlign: 'center',
          headerBackground: () => null,
          headerTitleStyle: {
            color: Colors.BLACK,
            fontSize: 16,
            fontFamily: 'Outfit-SemiBold',
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default CarStack;
