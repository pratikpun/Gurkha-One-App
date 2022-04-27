import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Components/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Favourites from './Components/Home/Favourites.js/Favourites';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Favourites"
          component={Favourites}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainRoutes;
