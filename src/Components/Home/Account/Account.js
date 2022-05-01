import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {button} from '../../../Login/styles';
import {useNavigation} from '@react-navigation/native';
import {settingOptions, sectionTitle, settingText, userHeader} from './styles';
import {Divider} from 'react-native-elements';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TitleLine from '../TitleLine';
import axios from 'axios';

const Account = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  //
  useEffect(() => {
    getFirstName();
  }, []);

  const getFirstName = async () => {
    const fName = await AsyncStorage.getItem('firstName');
    setFirstName(fName);
  };

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('jwtToken');
    navigation.navigate('Login');
  };

  const handleDeleteAccount = () => {
    setModalVisible(true);
  };

  const handleModalDeleteButton = () => {
    console.log('ACCOUNT DELETE');
    setModalVisible(!modalVisible);
    navigation.navigate('Login');
    // axios delete userID from USER table.
  };

  const handleDeleteUser = async user => {
    console.log('ACCOUNT DELETE');
    setModalVisible(!modalVisible);
    navigation.navigate('Login');
    const userID = await AsyncStorage.getItem('userID');
    const res = await axios.delete(
      'http://localhost:9000/api/deleteUser/' + userID
    );
  };

  return (
    <ScrollView style={{height: '100%', backgroundColor: '#9fc5e8'}}>
      <View>
        <TitleLine title="MY ACCOUNT" />
        <View>
          <View style={userHeader}>
            <Image
              //source={{uri: 'https://reactjs.org/logo-og.png'}}
              source={require('../../../assets/user-avatar.png')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 150 / 2,
                borderWidth: 1,
                marginLeft: 20,
              }}
            />

            <View style={{marginLeft: 20}}>
              <Text style={sectionTitle}>Hello, {firstName}!</Text>
            </View>
          </View>
          <Divider width={2} />
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <View style={settingOptions}>
              <Text style={settingText}>
                <IconMaterial name="pencil" size={24} color="#0072BB" /> Edit
                Profile
              </Text>
              <Text>
                <IconMaterial name="chevron-right" size={24} />{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <Divider width={2} />
          <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
            <View style={settingOptions}>
              <Text style={settingText}>
                <IconMaterial name="heart" size={24} color="#0072BB" />{' '}
                Favourite Teams
              </Text>
              <Text>
                <IconMaterial name="chevron-right" size={24} />{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <Divider width={2} />

          <TouchableOpacity onPress={handleDeleteAccount}>
            <View style={settingOptions}>
              <Text style={settingText}>
                <IconMaterial name="account-remove" size={24} color="#0072BB" />
                Delete Account
              </Text>
              <Text>
                <IconMaterial name="chevron-right" size={24} />{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <Divider width={2} />

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>DELETE Account?</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>CANCEL</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.delButton, styles.delButton]}
                      onPress={handleDeleteUser}>
                      <Text style={styles.textStyle}>DELETE</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
            {/* <Pressable
              style={[modal.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
          </View>
        </View>
        <TouchableOpacity style={button}>
          <Button title="Sign Out" color="white" onPress={handleSignOut} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  delButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
    backgroundColor: 'red',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
