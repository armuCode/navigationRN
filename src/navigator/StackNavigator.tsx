import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator /* initialRouteName="Pagina2Screen" */
      screenOptions={{
        //headerShown: false, //oculta la barra de navegación
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Pag 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Pag 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Pag 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Pag Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
