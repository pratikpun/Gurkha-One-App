import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {button} from '../../../Login/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {background, itemA, itemB, itemsWrapper} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SearchTournament,
  SearchTournamentYear,
} from '../Tournament/SearchTournament';
import {Upcoming} from '../../UpcomingTournament/Upcoming';
import {SliderBox} from 'react-native-image-slider-box';
import {titleText} from '../../UpcomingTournament/styles';

const Dashboard = () => {
  const [teamInfo, setTeamInfo] = useState([]);
  const [response, setResponse] = useState(false);
  const [img, setImg] = useState([
    require('/Users/pratikpun/Desktop/Dissertation/MyApp/src/assets/football1.jpg'),
    require('/Users/pratikpun/Desktop/Dissertation/MyApp/src/assets/football2.jpg'),
    require('/Users/pratikpun/Desktop/Dissertation/MyApp/src/assets/football3.jpg'),
    require('/Users/pratikpun/Desktop/Dissertation/MyApp/src/assets/football4.jpg'),
    // require('../../../assets/football2.JPG'),
    // require('../../../assets/football3.JPG'),
    // require('../../../assets/football4.JPG'),
  ]);

  // useEffect runs before any components.
  useEffect(() => {
    getData();
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  const getData = async () => {
    // get AsyncStorage token from the local storage
    const value = await AsyncStorage.getItem('jwtToken');
    console.log(value);
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

  // must render this to use FlatList
  // const renderName = ({item}) => (
  //   <TouchableOpacity style={itemA}>
  //     <Text style={itemsWrapper}> {item.teamName} </Text>
  //     <Text style={itemsWrapper}> {item.teamScore} </Text>
  //   </TouchableOpacity>
  // );

  return (
    <SafeAreaView style={background}>
      <ScrollView nestedScrollEnabled={true}>
        {/* <FlatList> */}
        {response ? (
          <>
            <SliderBox images={img} />
            <Text style={itemB}>Todays' Game</Text>
            <View style={itemsWrapper}>
              <Text style={itemA}>
                {' '}
                {console.log(teamInfo)}
                {teamInfo[0].teamName} {teamInfo[0].teamScore}
              </Text>
              <Text style={itemA}> - </Text>
              <Text style={itemA}>
                {' '}
                {teamInfo[1].teamScore} {teamInfo[1].teamName}
              </Text>
            </View>
            <>
              <View>
                <Text style={titleText}>Upcoming Tournaments</Text>
              </View>

              <ScrollView horizontal={true}>
                <Upcoming />
                <Upcoming />
                <Upcoming />
              </ScrollView>
              <View style={{flexDirection: 'row', zIndex: 1, marginTop: 25}}>
                <SearchTournament />
                <SearchTournamentYear />
              </View>
              {/* implement search function */}
              <TouchableOpacity style={button}>
                <Button title="Search" onPress={handleClick} />
              </TouchableOpacity>

              {click ? <ResultCard /> : null}
            </>
          </>
        ) : (
          <></>
        )}

        {/* <FlatList
        numColumns={2}
        data={teamInfo}
        renderItem={renderName}
        keyExtractor={teamInfo.teamID}
      /> */}
        {/* </FlatList> */}
      </ScrollView>
    </SafeAreaView>
    //       // {/* if value of response is true after getting data, then only render the component */}
    //       {/* {response && (
    //         <View>
    //           <Text>DashBoard</Text>
    //           {teamInfo.map(item => {
    //             return <Text key={item.teamID}>{item.teamName}</Text>;
    //           })}
    //         </View>
    //       )} */}

    //       {/* if value of response is true after getting data, then render the component else text msg. */}
    //       {/* {response ? (
    //         <View>
    //           {teamInfo.map(item => {
    //             return (
    //               <View key={item.teamID}>
    //                 <Text>{item.teamName}</Text>
    //                 <Text>{item.teamScore}</Text>
    //               </View>
    //             );
    //           })}
    //         </View>
    //       ) : (
    //         <>
    //           <Text>Sorry, an error occured.</Text>
    //         </>
    //       )} */}
  );
};

const ResultCard = () => {
  return (
    <View
      style={{
        height: 130,
        width: 300,
        backgroundColor: '#7899D4',
        borderRadius: 15,
        marginLeft: 45,
        marginTop: 20,
      }}>
      <Text style={{fontSize: 25, textAlign: 'center', margin: 5}}>
        {' '}
        Gurkha Cup
      </Text>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        Date: 29th July 2022
      </Text>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        Venue: TBC
      </Text>
    </View>
  );
};

export default Dashboard;
