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

  const handleSave = async () => {
    //Alert.alert(userData);
    console.log(userData);
    const res = await axios.put(
      'http://localhost:9000/api/editProfile',

      userData
    );
    if (res.data.msg === 'success') {
      Alert.alert('Successfully Updated', `Please login again to see changes!`);
      navigation.navigate('Account');
    } else {
      Alert.alert('Error', `Something went wrong!`);
    }
    console.log(res.data);
  };

  return (
    //<View> instead of KeyboardAvoidingView
    <>
      <ScreenHeader title="Edit Profile" />
      <KeyboardAvoidingView
        style={{backgroundColor: '#9fc5e8', height: '100%'}}
        behavior="padding">
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
          <Button title="SAVE" color="white" onPress={handleSave} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
