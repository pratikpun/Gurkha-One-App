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
import {SectionList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const [teamInfo, setTeamInfo] = useState([]);
  const [response, setResponse] = useState(false);

  // useEffect runs before any components.
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // get AsyncStorage token from the local storage
    const value = await AsyncStorage.getItem('jwtToken');
    console.log(value);
    const resp = await axios.get('http://localhost:9000/api/dashboard', {
      // must use jwtTokens in API headers when authCheck middleware is used in API routes.
      headers: {
        Authorization: 'Bearer ' + value,
        Accept: 'application/json',
        'Contnet-Type': 'application/json',
      },
    });

    setTeamInfo(resp.data);
    if (resp.data) {
      setResponse(true);
    }
  };

  console.log(teamInfo);

  // must render this to use FlatList
  // const renderName = ({item}) => (
  //   <TouchableOpacity style={itemA}>
  //     <Text style={itemsWrapper}> {item.teamName} </Text>
  //     <Text style={itemsWrapper}> {item.teamScore} </Text>
  //   </TouchableOpacity>
  // );

  return (
    <SafeAreaView style={background}>
      <ScrollView>
        {response ? (
          <>
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

export default Dashboard;

const styles = StyleSheet.create({});
