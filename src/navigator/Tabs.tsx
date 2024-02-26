/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabScreen1 from '../screens/TabScreen1';
import TabScreen2 from '../screens/TabScreen2';
import {StackNavigator} from './StackNavigator';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: 'blue',
      }}>
      <BottomTabAndroid.Screen
        name="TabScreen1"
        options={{title: 'T1'}}
        component={TabScreen1}
      />
      <BottomTabAndroid.Screen
        name="TabScreen2"
        options={{title: 'T2'}}
        component={TabScreen2}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'ST'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'blue',
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
        name="TabScreen2"
        options={{title: 'T2'}}
        component={TabScreen2}
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
