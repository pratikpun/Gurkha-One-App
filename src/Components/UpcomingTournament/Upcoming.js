import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {titleText} from './styles';
const Upcoming = () => {
  return (
    <>
      <View
        style={{
          height: 130,
          width: 200,
          backgroundColor: '#7899D4',
          borderRadius: 15,
          marginLeft: 45,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
          Date: 29th July 2022s
        </Text>
        <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
          Venue: TBC
        </Text>
      </View>
    </>
  );
};

export {Upcoming};
