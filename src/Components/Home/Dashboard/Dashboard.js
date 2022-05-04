import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {button} from '../../../Login/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  background,
  itemA,
  scoreTitle,
  itemsWrapper,
  leftTeam,
  rightTeam,
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {SearchTournament} from '../Tournament/SearchTournament';
import {Upcoming} from '../../UpcomingTournament/Upcoming';
import {SliderBox} from 'react-native-image-slider-box';
import {titleText} from '../../UpcomingTournament/styles';
import TitleLine from '../TitleLine';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const [teamInfo, setTeamInfo] = useState([]);
  const [response, setResponse] = useState(false);
  const [img, setImg] = useState([
    require('/Users/pratikpun/Desktop/Dissertation/MyApp/src/assets/football1.jpg'),
    require('/Users/pratikpun/Desktop/Dissertation/MyApp/src/assets/football2.jpg'),
    require('/Users/pratikpun/Desktop/Dissertation/MyApp/src/assets/football3.jpg'),
    require('/Users/pratikpun/Desktop/Dissertation/MyApp/src/assets/football4.jpg'),
  ]);
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [tournamentValue, setTournamentValue] = useState({value: ''});
  const [upcomingTournament, setUpcomingTournament] = useState([]);

  // useEffect runs before any components.
  useEffect(() => {
    getData();
    getTournamentByYear();
    getUpcomingTournaments();
  }, []);

  const getTournamentByYear = async () => {
    const resp = await axios.post(
      'http://localhost:9000/api/tournaments',
      tournamentValue
    );

    setData(resp.data);
  };

  const getUpcomingTournaments = async () => {
    const value = await AsyncStorage.getItem('jwtToken');

    const resp = await axios.get('http://localhost:9000/api/upcoming', {
      headers: {
        Authorization: 'Bearer ' + value,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    setUpcomingTournament(resp.data);
  };

  const handleClick = () => {
    getTournamentByYear();
    setClick(true);
  };

  const getData = async () => {
    // get AsyncStorage token from the local storage
    const value = await AsyncStorage.getItem('jwtToken');
    const resp = await axios.get('http://localhost:9000/api/dashboard', {
      // must use jwtTokens in API headers when authCheck middleware is used in API routes.
      headers: {
        Authorization: 'Bearer ' + value,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    setTeamInfo(resp.data);
    if (resp.data) {
      setResponse(true);
    }
  };

  return (
    <SafeAreaView style={background}>
      <ScrollView nestedScrollEnabled={true}>
        {response ? (
          <>
            <SliderBox images={img} />
            <Text style={scoreTitle}>TODAY'S GAME</Text>
            <View style={itemsWrapper}>
              <Text style={leftTeam}>{teamInfo[0].teamName}</Text>
              <Text style={leftTeam}> {teamInfo[0].teamScore}</Text>
              <Text style={itemA}> - </Text>
              <Text style={itemA}> {teamInfo[1].teamScore}</Text>
              <Text style={rightTeam}> {teamInfo[1].teamName}</Text>
            </View>
            <>
              {/* Horizontal Line with text in middle */}
              <TitleLine title="Upcoming Tournaments" />

              <ScrollView horizontal={true}>
                {upcomingTournament.map(item => (
                  <Upcoming
                    name={item.utName}
                    date={item.utDate}
                    venue={item.utVenue}
                    desc={item.utDesc}
                  />
                ))}
              </ScrollView>

              <TitleLine title="Find Tournament" />

              <View
                style={{
                  zIndex: 1,
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <SearchTournament setTournamentValue={setTournamentValue} />
                {/* <SearchTournamentYear /> */}
              </View>
              {/* implement search function */}
              <TouchableOpacity style={button}>
                <Button title="Search" onPress={handleClick} />
              </TouchableOpacity>

              {data.length > 0 && <ResultCard data={data} />}
            </>
          </>
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const ResultCard = props => {
  return (
    <View>
      {props.data.map((item, index) => (
        <View key={index}>
          <View
            style={{
              height: 130,
              width: 300,
              backgroundColor: '#dfe3ee',
              borderRadius: 15,
              marginLeft: 45,
              marginTop: 20,
            }}>
            <ScrollView>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  margin: 5,
                  textDecorationLine: 'underline',
                }}>
                {item.Name}
              </Text>
              <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
                {item.tournamentDesc}
              </Text>
              <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
                Venue: PALMER PARK, READING
              </Text>
            </ScrollView>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Dashboard;
