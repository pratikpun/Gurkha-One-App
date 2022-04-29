import React from 'react';
import {Text, View} from 'react-native';
import {titleText} from '../UpcomingTournament/styles';

const TitleLine = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
      }}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: 'black',
          marginRight: 10,
        }}
      />
      <View>
        <Text style={titleText}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: 'black',
          marginLeft: 10,
        }}
      />
    </View>
  );
};

export default TitleLine;
