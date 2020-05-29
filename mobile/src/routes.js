import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createStackNavigator();

function RootStack() {
  return (
    <Routes.Navigator
      initialRouteName="Main"
      screenOptions={{ gestureEnabled: false }}
    >
      <Routes.Screen
        name="Main"
        component={Main}
        options={{ title: 'Dev-Radar' }}
      />
      <Routes.Screen
        name="Profile"
        component={Profile}
        initialParams={{ user: 'me' }}
      />
    </Routes.Navigator>
  );
}

/*
import { createStackNavigator } from '@react-navigation/stack'
import { createCompatNavigatorFactory } from '@react-navigation/compat'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createCompatNavigatorFactory(createStackNavigator)({
    Main,
    Profile,
});
*/
export default Routes