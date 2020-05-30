import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import { StatusBar } from 'react-native';
import api from './src/service/api'

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  );
}

export default App;