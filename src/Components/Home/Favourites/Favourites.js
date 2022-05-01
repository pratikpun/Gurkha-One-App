import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {view, title} from './styles';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenHeader from '../../ScreenHeader';
import FavouriteCard from '../FavouriteCard';
import TitleLine from '../TitleLine';

const Favourites = props => {
  const navigation = useNavigation();
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    getFavList();
  }, []);

  const getFavList = async () => {
    const userID = await AsyncStorage.getItem('userID');
    const res = await axios.get(
      'http://localhost:9000/api/favourites/' + userID
    );
    setFavData(res.data);
  };

  const navigateToFavTeam = item => {
    switch (item.teamName) {
      case 'Reading':
        navigation.navigate('Reading');
        break;
      case 'Swindon':
        navigation.navigate('Swindon');
        break;
      case 'Kent':
        navigation.navigate('Kent');
        break;
      default:
        navigation.navigate('Dashboard');
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#9fc5e8', height: '100%'}}>
      <ScreenHeader title=" My Favourites " />
      <TitleLine title={`Favourites : ${favData.length}`} />

      <View style={view}>
        {favData.map(item => (
          <TouchableOpacity
            onPress={() => navigateToFavTeam(item)}
            key={item.teamID}>
            <FavouriteCard key={item.favID} teamName={item.teamName} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Favourites;
