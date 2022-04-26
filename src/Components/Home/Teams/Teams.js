import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Button, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {titleText, listofTeams, eachTeam} from './styles';
import axios from 'axios';

const Teams = () => {
  const [data, setData] = useState([]);
  const [heartType, setHeartType] = useState('heart');

  useEffect(() => {
    getTeams();
  });

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

  console.log(data);

  return (
    <View style={{backgroundColor: '#C1CFDA', height: '100%'}}>
      <Text style={titleText}>All Teams</Text>
      <ScrollView>
        <View style={listofTeams}>
          {data.map(team => (
            <>
              <Text style={eachTeam} key={team.teamID}>
                {team.teamName}
                <TouchableOpacity
                  onPress={() => {
                    if (heartType === 'heart') {
                      setHeartType('hearto');
                    } else {
                      setHeartType('heart');
                    }
                  }}>
                  <Icon name={heartType} size={25} />
                </TouchableOpacity>
              </Text>
            </>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Teams;
