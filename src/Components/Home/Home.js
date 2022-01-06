import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from './Account/Account';
import Search from './Search/Search';
import Dashboard from '../../Components/Home/Dashboard/Dashboard';
import Icon from 'react-native-vector-icons/AntDesign';

const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#52b69a',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => <Icon name="home" size={25} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Icon name="search1" size={25} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => <Icon name="user" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  return <MyTabs />;
};
export default Home;
