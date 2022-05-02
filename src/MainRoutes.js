import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Components/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Favourites from './Components/Home/Favourites/Favourites';
import Reading from './Components/TeamScreen/Reading';
import Swindon from './Components/TeamScreen/Swindon';
import Kent from './Components/TeamScreen/Kent';
import EditProfile from './Components/Home/EditProfile';
import Oxford from './Components/TeamScreen/Oxford';
import Slough from './Components/TeamScreen/Slough';
import Newbury from './Components/TeamScreen/Newbury';
import Basingstoke from './Components/TeamScreen/Basingstoke';
import Aldershot from './Components/TeamScreen/Aldershot';

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
          options={{headerShown: true}}
          name="Favourites"
          component={Favourites}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Reading"
          component={Reading}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Swindon"
          component={Swindon}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Kent"
          component={Kent}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Aldershot"
          component={Aldershot}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Basingstoke"
          component={Basingstoke}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Newbury"
          component={Newbury}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Slough"
          component={Slough}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Oxford"
          component={Oxford}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="EditProfile"
          component={EditProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainRoutes;
