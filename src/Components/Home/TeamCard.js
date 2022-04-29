import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

const TeamCard = ({teamName, teamDesc, teamIcon}) => {
  return (
    <View
      style={{
        height: 150,
        width: 300,
        backgroundColor: '#FBFBFF',
        opacity: 0.9,
        borderRadius: 15,
        marginLeft: 35,
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            margin: 5,
            textDecorationLine: 'underline',
          }}>
          {teamName}
        </Text>
        {teamIcon}
      </View>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        {teamDesc}
      </Text>
    </View>
  );
};

export default TeamCard;
