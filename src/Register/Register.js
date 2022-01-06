import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../Components/Header';
import {background, details, text, login, border} from './styles';
import {button} from '../Login/styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Register = () => {
  const navigation = useNavigation();

  const [formData, setformData] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (inputName, inputValue) => {
    setformData(prevState => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  // API Call Backend
  const handleSumbit = async () => {
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match, please try again');
    } else {
      const response = await axios.post(
        'http://localhost:9000/api/register',
        formData
      );
      console.log(response.data.msg);

      if (response.data.msg === 'exist') {
        alert('Email already used');
      } else {
        if (response.data.msg === 'success') {
          navigation.navigate('Login');
        } else {
          alert('Error, please check all fields again.');
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <ScrollView style={background}>
        <Header title="Register" />
        <View>
          <View style={{width: '90%', marginLeft: 20}}>
            <Text style={text}>First Name</Text>
            <TextInput
              style={details}
              placeholder="First name"
              value={formData.fName}
              onChangeText={value => handleChange('firstName', value)}
            />

            <Text style={text}>Email</Text>
            <TextInput
              style={details}
              placeholder="Email"
              value={formData.email}
              onChangeText={value => handleChange('email', value)}
            />
            <Text style={text}>Password</Text>
            <TextInput
              secureTextEntry
              style={details}
              placeholder="Password"
              value={formData.password}
              onChangeText={value => handleChange('password', value)}
            />

            <Text style={text}> Confirm Password</Text>
            <TextInput
              secureTextEntry
              style={details}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChangeText={value => handleChange('confirmPassword', value)}
            />

            <TouchableOpacity style={button}>
              <Button title="Submit" color="white" onPress={handleSumbit} />
            </TouchableOpacity>
            <TouchableOpacity style={login}>
              <Button
                title="Already have an account?"
                onPress={() => navigation.navigate('Login')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
