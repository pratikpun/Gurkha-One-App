import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {titleText} from './styles';
const Upcoming = ({name, date, venue, desc}) => {
  return (
    <>
      <View
        style={{
          height: 200,
          width: 250,
          //backgroundColor: '#F79D5C',
          backgroundColor: '#dfe3ee',
          borderRadius: 15,
          borderWidth: 0.5,
          marginLeft: 45,
          marginTop: 20,
          padding: 10,
          color: 'white',
        }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              margin: 5,
              fontWeight: 'bold',
              //color: 'white',
            }}>
            {name}
          </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: '70%',
              marginLeft: 35,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              margin: 5,
              fontWeight: 'bold',
            }}>
            Date:
            {date}
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              margin: 5,
              fontWeight: 'bold',
            }}>
            Venue: {venue}
          </Text>
          <Text style={{fontSize: 17, textAlign: 'left', margin: 5}}>
            {desc}
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

export {Upcoming};
