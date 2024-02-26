import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabScreen1 from '../screens/TabScreen1';
import TabScreen2 from '../screens/TabScreen2';
import {StackNavigator} from './StackNavigator';
import {styles} from '../theme/appTheme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'blue',
        headerShown: false,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen
        name="TabScreen1"
        options={{title: 'T1'}}
        component={TabScreen1}
      />
      <Tab.Screen
        name="TabScreen2"
        options={{title: 'T2'}}
        component={TabScreen2}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'ST'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
