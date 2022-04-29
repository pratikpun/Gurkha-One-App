import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity} from 'react-native';
import {Button, Alert, TextInput} from 'react-native';
import Header from '../Components/Header';
import {border, backgroundColor, text, button, register} from './styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (inputName, inputValue) => {
    setLoginData(prevState => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const handleLogIn = async () => {
    const response = await axios.post(
      'http://localhost:9000/api/login',
      loginData
    );
    console.log(response.data.data);
    if (response.data.data.success === true) {
      await AsyncStorage.setItem('jwtToken', response.data.data.token);
      await AsyncStorage.setItem(
        'userID',
        JSON.stringify(response.data.data.userID)
      );
      await AsyncStorage.setItem('firstName', response.data.data.firstName);
      await AsyncStorage.setItem('email', response.data.data.email);
      navigation.navigate('Home');
    }
    if (response.data.data.success === false) {
      console.log(response.data.data);
      Alert.alert('Error', `Email/Password is invalid.`);
    }

    // if (response.data.data.success === undefined) {
    //   Alert.alert('Error', `Email/Password is invalid.`);
    // }

    console.log(response.data.data);
  };
  return (
    //<View> instead of KeyboardAvoidingView
    <>
      <Header title="Welcome" />
      <KeyboardAvoidingView style={backgroundColor} behavior="padding">
        <Text style={text}>Email</Text>
        <TextInput
          style={border}
          placeholder="Email"
          value={loginData.email}
          onChangeText={value => handleChange('email', value)}
        />
        <Text style={text}>Password</Text>
        <TextInput
          style={border}
          placeholder="Password"
          secureTextEntry
          value={loginData.password}
          onChangeText={value => handleChange('password', value)}
        />

        <TouchableOpacity style={button}>
          <Button
            title="Log In"
            color="white"
            //onPress={() => navigation.navigate('Home')}
            //onPress={() => navigation.replace('Home')}
            onPress={handleLogIn}
          />
        </TouchableOpacity>
        <TouchableOpacity style={register}>
          <Button
            title="Don't have an account?"
            onPress={() => navigation.navigate('Register')}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
