import React, {cloneElement, useEffect, useState} from 'react';
import {TouchableOpacity, View, Button, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {titleText, listofTeams, eachTeam, hidden} from './styles';
import axios from 'axios';
import Favourites from '../Favourites.js/Favourites';
import {FlatList} from 'react-native-gesture-handler';

const Teams = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [heartType, setHeartType] = useState('hearto');
  const [favoriteList, setFavoriteList] = useState([]);
  const [payload, setPayload] = useState({
    userID: '',
    teamName: '',
  });

  useEffect(() => {
    getTeams();
    getFavListItems();
  }, []);

  const handleFavourite = async team => {
    // if (!favoriteList.some(favItem => favItem.teamName === team.teamName)) {
    setFavoriteList([...favoriteList, team]);
    postFavList(team);
    //}
  };

  const renderHeader = () => {
    return (
      <TouchableOpacity>
        <Button
          title="Go to favorites"
          onPress={() =>
            navigation.navigate('Favourites', {
              favoriteList,
            })
          }
        />
      </TouchableOpacity>
    );
  };

  const postFavList = async team => {
    const userID = await AsyncStorage.getItem('userID');
    const res = await axios.post('http://localhost:9000/api/favourites', {
      team,
      userID,
    });
    console.log(team);
  };

  const handleRemoveFavourite = team => {
    const filteredList = favoriteList.filter(
      item => item.teamName !== team.teamName
    );
    deleteFavListItem(team);
    setFavoriteList(filteredList);
  };

  const getFavListItems = async () => {
    const userID = await AsyncStorage.getItem('userID');
    const res = await axios.get(
      'http://localhost:9000/api/favourites/' + userID
    );
    setFavoriteList(res.data);
  };

  const deleteFavListItem = async team => {
    const userID = await AsyncStorage.getItem('userID');
    const res = await axios.delete(
      'http://localhost:9000/api/favourites/' + userID + '/' + team.teamName
    );
    setFavoriteList(res.data);
  };

  const ifTeamExists = team => {
    if (
      favoriteList.filter(item => item.teamName === team.teamName).length > 0
    ) {
      return true;
    }
    return false;
  };

  //console.log(favoriteList);

  const getTeams = async () => {
    const resp = await axios.get('http://localhost:9000/api/teams', {
      // must use jwtTokens in API headers when authCheck middleware is used in API routes.
      // headers: {
      //   Authorization: 'Bearer ' + value,
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
    });

    setData(resp.data);
  };

  return (
    <View style={{backgroundColor: '#C1CFDA', height: '100%'}}>
      <Text style={titleText}>All Teams</Text>
      <ScrollView>
        <View style={listofTeams}>
          {data.map(team => (
            <Text style={eachTeam} key={team.teamID}>
              {team.teamName}
              <TouchableOpacity
                onPress={() =>
                  ifTeamExists(team)
                    ? handleRemoveFavourite(team)
                    : handleFavourite(team)
                }>
                <Icon
                  name={ifTeamExists(team) ? 'heart' : 'hearto'}
                  //name={heartType}
                  size={25}
                />
              </TouchableOpacity>
            </Text>
          ))}
        </View>
        {/* {data.length > 0 && (
        <FlatList
          data={data}
          ListHeaderComponent={renderHeader}
          renderItem={({item}) => {
            return (
              <View style={eachTeam}>
                <Text>{item.teamName}</Text>
                <TouchableOpacity
                  onPress={() =>
                    ifTeamExists(item)
                      ? handleRemoveFavourite(item)
                      : handleFavourite(item)
                  }>
                  <Icon
                    name={ifTeamExists(item) ? 'heart' : 'hearto'}
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )} */}
      </ScrollView>
    </View>
  );
};

export default Teams;
