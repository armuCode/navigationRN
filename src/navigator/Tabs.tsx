/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabScreen1 from '../screens/TabScreen1';
import {StackNavigator} from './StackNavigator';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TopTapNavigator from './TopTapNavigator';
import {colores} from '../theme/appTheme';
import SettingsScreen from '../screens/SettingsScreen';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}>
      <BottomTabAndroid.Screen
        name="TabScreen1"
        options={{title: 'T1'}}
        component={TabScreen1}
      />
      <BottomTabAndroid.Screen
        name="TopTapNavigator"
        options={{title: 'TopTap'}}
        component={TopTapNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'ST'}}
        component={StackNavigator}
      />
      <BottomTabAndroid.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'colores.primary',
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      <BottomTabIOS.Screen
        name="TabScreen1"
        options={{title: 'T1'}}
        component={TabScreen1}
      />
      <BottomTabIOS.Screen
        name="TopTapNavigator"
        options={{title: 'T2'}}
        component={TopTapNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'ST'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

export default Tabs;
