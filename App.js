import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from "./src/navigation/navigate"
import SettingsStackScreen from './src/navigation/SettingStackScreen';
import MapOnly from './src/Screen/MapOnly';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
<MapOnly/>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeStackScreen} />
    //     <Tab.Screen name="Settings" component={SettingsStackScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}