import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {StackNavigator} from './src/navigator/StackNavigator';
import Tabs from './src/navigator/Tabs';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <Tabs />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
