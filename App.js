import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from './screens/OnBoarding';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import Landingscreen from './screens/LandingScreen';
import Menu from './screens/Menu';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Login />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LandingScreen" component={Landingscreen} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}