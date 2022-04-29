import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

const FavouriteCard = ({teamName}) => {
  return (
    <View
      style={{
        height: 80,
        width: 300,
        backgroundColor: '#FBFBFF',
        opacity: 0.9,
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        padding: 15,
      }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            alignContent: 'center',
            margin: 5,
            padding: 10,
          }}>
          {teamName}
        </Text>
      </View>
    </View>
  );
};

export default FavouriteCard;
