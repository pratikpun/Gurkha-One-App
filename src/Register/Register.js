import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
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

  const showSuccessMsg = () => {
    Alert.alert('Successfully registered!');
    navigation.navigate('Login');
  };

  const validateEmail = email => {
    let reg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (reg.test(email) === false) {
      Alert.alert('Error', `Invalid Email!`);
      return false;
    }
    return true;
  };

  // API Call Backend
  const handleSumbit = async () => {
    // console.log(formData);
    if (
      formData.email === '' ||
      formData.firstName === '' ||
      formData.password === '' ||
      formData.confirmPassword === ''
    ) {
      Alert.alert('Error', `Please fill in all the fields.`);
    } else {
      if (validateEmail(formData.email)) {
        if (formData.password.length <= 6) {
          Alert.alert('Error', `Password must be minimum 7 characters.`);
        } else {
          if (formData.password !== formData.confirmPassword) {
            Alert.alert('Error', `Password do not match.`);
          } else {
            const response = await axios.post(
              'http://localhost:9000/api/register',
              formData
            );
            console.log(response.data);
            // console.log(response.data.msg);

            if (response.data.msg === 'exist') {
              Alert.alert('Error', `Email already in use.`);
            } else {
              if (response.data.msg === 'success') {
                setTimeout(showSuccessMsg, 500);
              } else {
                Alert.alert('Error', `Please check all fields again.`);
              }
            }
          }
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
            <Text style={text}>Name</Text>
            <TextInput
              style={details}
              placeholder="Name"
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
