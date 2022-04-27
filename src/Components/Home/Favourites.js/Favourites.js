import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios, {Axios} from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  ShadowPropTypesIOS,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Navigate} from 'react-router-native';

const Favourites = props => {
  //   const route = useRoute();
  //   const {favoriteList} = route.params;
  const navigation = useNavigation();
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    getFavList();
  }, []);

  const getFavList = async () => {
    const userID = await AsyncStorage.getItem('userID');
    const res = await axios.get(
      'http://localhost:9000/api/favourites/' + userID
    );
    setFavData(res.data);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          width: '80%',
          marginLeft: 40,
          marginTop: 50,
        }}>
        <Text>WElcome to your favourites page.</Text>

        {favData.map(item => (
          <Text key={item.favID}>{item.teamName}</Text>
        ))}

        <Button title="BACK" onPress={() => navigation.navigate('Account')} />
        {/* <FlatList
          data={favoriteList}
          renderItem={({item}) => {
            return <View>{item && <Text>{item['teamName']}</Text>}</View>;
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default Favourites;
