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

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import WelcomeScreen from '../screens/welcome/welcomeScreen';
import HomeIcon from '../../assets/images/home_icon.png';
import HomeBlackIcon from '../../assets/images/home_black_icon.png';
import FavoriteBlackIcon from '../../assets/images/favorite_black_icon.png';
import FavoriteIcon from '../../assets/images/favorite_icon.png';
import ListIcon from '../../assets/images/list_icon2.png';
import SettingsIcon from '../../assets/images/settings_icon.png';
import SettingBlackIcon from '../../assets/images/settings_black_icon.png';
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
      screenOptions={{
        tabBarActiveTintColor: Colors.LIGHT_GRAY,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarActiveBackgroundColor: Colors.WHITE,
        tabBarInactiveBackgroundColor: Colors.WHITE,
        tabBarLabelStyle: {
          color: Colors.WHITE,
        },
        headerShown: false,
      }}
      tabBar={props => BottomFabBarIcon(props)}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, HomeIcon, HomeBlackIcon),
          tabBarLabel: showLabel ? 'Home' : undefined,
        }}
        name="Home"
        component={CarStack}
      />
      <Tab.Screen
        name="Meh"
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, FavoriteIcon, FavoriteBlackIcon),
          tabBarLabel: showLabel ? 'Meh' : undefined,
        }}
        component={generateScreen('Meh')}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => getTabBarIcon(focused, ListIcon, ListIcon),
          tabBarActiveBackgroundColor: '#45014A',
          tabBarActiveTintColor: 'purple',
          tabBarLabel: showLabel ? 'Rocket' : undefined,
        }}
        name="Settings"
        component={WelcomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, NotifIcon, NotifBlackIcon),
          tabBarLabel: showLabel ? 'Trophy' : undefined,
        }}
        name="Trophy"
        component={generateScreen('Trophy')}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, SettingsIcon, SettingBlackIcon),
          tabBarLabel: showLabel ? 'Wallet' : undefined,
        }}
        name="Wallet"
        component={generateScreen('Wallet')}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
