/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import WelcomeScreen from '../screens/welcome/welcomeScreen';
import HomeIcon from '../../assets/images/home_icon.png';
import HomeBlackIcon from '../../assets/images/home_black_icon.png';
import FavoriteBlackIcon from '../../assets/images/favorite_black_icon.png';
import FavoriteIcon from '../../assets/images/favorite_icon.png';
import ListIcon from '../../assets/images/list_icon2.png';
import ProfileLightIcon from '../../assets/images/profile_light_icon.png';
import ProfileBlackIcon from '../../assets/images/profile_black_icon.png';
import NotifBlackIcon from '../../assets/images/notif_black_icon.png';
import NotifIcon from '../../assets/images/notif_icon.png';
import {Colors} from '../constants/colors';
import CarStack from './carStack';
import {Button} from '@rneui/base';
import {useAuthService} from '../hooks/service';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  focused: boolean,
  focusedImage: ImageSourcePropType,
  unfocusedImage: ImageSourcePropType,
  width: number = 25,
  height: number = 25,
) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={focused ? focusedImage : unfocusedImage}
        style={{width: width, height: height}}
      />
    </View>
  );
};

const BottomFabBarIcon = (props: any) => {
  return (
    <BottomFabBar
      mode="default"
      // Add Shadow for active tab bar button
      focusedButtonStyle={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.61,
        shadowRadius: 8,
        elevation: 14,
      }}
      // - You can add the style below to show content screen under the tab-bar
      // - It will makes the "transparent tab bar" effect.
      bottomBarContainerStyle={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      springConfig={{
        stiffness: 1500,
        damping: 85,
        mass: 4,
      }}
      {...props}
    />
  );
};

export const tabBarOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: Colors.LIGHT_GRAY,
  tabBarInactiveTintColor: Colors.WHITE,
  tabBarActiveBackgroundColor: Colors.WHITE,
  tabBarInactiveBackgroundColor: Colors.WHITE,
  headerShown: false,
};

const TabStack = () => {
  const authService = useAuthService();
  const showLabel = false;

  const generateScreen = (screen: string) => () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text>{screen}!</Text>
        <Button
          onPress={() =>
            // call sign out function from auth firebase for testing auth workflow

            authService.logout()
          }>
          Sign out
        </Button>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={tabBarOptions}
      tabBar={props => BottomFabBarIcon(props)}>
      <Tab.Screen
        name="Home"
        component={CarStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, HomeIcon, HomeBlackIcon),
        }}
      />
      <Tab.Screen
        name="Meh"
        component={generateScreen('Meh')}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, FavoriteIcon, FavoriteBlackIcon),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({focused}) => getTabBarIcon(focused, ListIcon, ListIcon),
          tabBarActiveBackgroundColor: '#45014A',
          tabBarActiveTintColor: 'purple',
        }}
      />
      <Tab.Screen
        name="Trophy"
        component={generateScreen('Trophy')}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, NotifIcon, NotifBlackIcon),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={generateScreen('Wallet')}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, ProfileLightIcon, ProfileBlackIcon, 27, 27),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
