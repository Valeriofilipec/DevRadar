import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main'
import Profile from './pages/Profile'

const Stack = createStackNavigator();

function Routes(){
    return(
        <Stack.Navigator screenOptions={{headerStyle:{ backgroundColor: '#56a329'}}}>
            <Stack.Screen name="Dev-Radar" component={Main} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default Routes