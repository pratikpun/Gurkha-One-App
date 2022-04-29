import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity} from 'react-native';
import {Button, Alert, TextInput} from 'react-native';
import {
  border,
  backgroundColor,
  text,
  button,
  register,
} from '../../Login/styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenHeader from '../ScreenHeader';

const EditProfile = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    userID: '',
    name: '',
    email: '',
  });
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const name = await AsyncStorage.getItem('firstName');
    const email = await AsyncStorage.getItem('email');
    const userID = await AsyncStorage.getItem('userID');
    setUserData({userID: userID, name: name, email: email});
  };

  const handleChange = (inputName, inputValue) => {
    setUserData(prevState => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const handleSave = () => {
    //Alert.alert(userData);
    console.log(userData);
    axios.put('http://localhost:9000/api/editProfile', userData);
  };

  return (
    //<View> instead of KeyboardAvoidingView
    <>
      <ScreenHeader title="Edit Profile" />
      <KeyboardAvoidingView style={backgroundColor} behavior="padding">
        <Text style={text}>Name</Text>
        <TextInput
          style={border}
          placeholder="Name"
          value={userData.name}
          onChangeText={value => handleChange('name', value)}
        />
        <Text style={text}>Email</Text>
        <TextInput
          style={border}
          placeholder="Email"
          value={userData.email}
          onChangeText={value => handleChange('email', value)}
        />

        <TouchableOpacity style={button}>
          <Button
            title="SAVE"
            color="white"
            //onPress={() => navigation.navigate('Home')}
            //onPress={() => navigation.replace('Home')}
            onPress={handleSave}
          />
        </TouchableOpacity>
        <TouchableOpacity style={register}>
          <Button
            title="Back?"
            onPress={() => navigation.navigate('Account')}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
