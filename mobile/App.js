// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/pages/Main';

function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(163, 202, 162)', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Valeriano Filipe</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dev-Radar" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;