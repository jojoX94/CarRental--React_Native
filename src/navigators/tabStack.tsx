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
import {Text, View, Switch, Image, ImageSourcePropType} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import WelcomeScreen from '../screens/welcome/welcomeScreen';
import HomeIcon from '../../assets/images/home_icon.png';
import {Colors} from '../constants/colors';

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
    </View>
  );
};

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

const TabStack = () => {
  const [showLabel, setShowLabel] = React.useState(false);
  const [enableSquare, setEnableSquare] = React.useState(false);
  const [isRtl, setIsRtl] = React.useState(false);

  const Home = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Enable TabBar labels</Text>
      <Switch
        value={showLabel}
        onValueChange={() => setShowLabel(!showLabel)}
      />
      <Text>Enable TabBar Square</Text>
      <Switch
        value={enableSquare}
        onValueChange={() => setEnableSquare(!enableSquare)}
      />
      <Text>Enable RTL</Text>
      <Switch value={isRtl} onValueChange={() => setIsRtl(!isRtl)} />
    </View>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarActiveBackgroundColor: Colors.PRIMARY,
        tabBarInactiveBackgroundColor: Colors.WHITE,
        tabBarLabelStyle: {
          color: Colors.WHITE,
        },
      }}
      tabBar={props => (
        <BottomFabBar
          mode={enableSquare ? 'square' : 'default'}
          isRtl={isRtl}
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
      )}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => getTabBarIcon(focused, HomeIcon, HomeIcon),
          tabBarLabel: showLabel ? 'Home' : undefined,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Meh"
        options={{
          tabBarIcon: ({focused}) => getTabBarIcon(focused, HomeIcon, HomeIcon),
          tabBarLabel: showLabel ? 'Meh' : undefined,
        }}
        component={generateScreen('Meh')}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => getTabBarIcon(focused, HomeIcon, HomeIcon),
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
          tabBarIcon: ({focused}) => getTabBarIcon(focused, HomeIcon, HomeIcon),
          tabBarLabel: showLabel ? 'Trophy' : undefined,
        }}
        name="Trophy"
        component={generateScreen('Trophy')}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => getTabBarIcon(focused, HomeIcon, HomeIcon),
          tabBarLabel: showLabel ? 'Wallet' : undefined,
        }}
        name="Wallet"
        component={generateScreen('Wallet')}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
