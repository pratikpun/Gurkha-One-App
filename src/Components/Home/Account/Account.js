import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {button} from '../../../Login/styles';
import {useNavigation} from '@react-navigation/native';
import {header, settingOptions, sectionTitle} from './styles';
import {Divider} from 'react-native-elements';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
  const navigation = useNavigation();

  //
  const handleSignOut = async () => {
    await AsyncStorage.removeItem('jwtToken');
    navigation.navigate('Login');
  };

  return (
    <>
      <ScrollView>
        <View>
          <Text style={header}>Welcome (Username).</Text>
          <Divider width={2} />
          <View>
            <View style={{flexDirection: 'row', backgroundColor: 'red'}}>
              <Image
                source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 150 / 2,
                }}
              />
              <View style={{marginLeft: 20}}>
                <Text style={sectionTitle}>Full name</Text>
                <Text style={sectionTitle}>Email</Text>
              </View>
            </View>

            <TouchableOpacity style={{backgroundColor: 'green'}}>
              <Button
                title="Favourite Teams"
                onPress={() => navigation.navigate('Favourites')}
              />
              <Text>
                <IconFont name="heart" size={20} />{' '}
              </Text>
            </TouchableOpacity>
            <Text>
              <IconFont name="heart" size={20} />{' '}
            </Text>

            <Divider width={2} />
            <Text style={settingOptions}>
              <Text>
                <IconMaterial name="account-group" size={24} />{' '}
              </Text>
              My Team
            </Text>
            <Divider width={2} />
            <Text style={settingOptions}>Options 3</Text>
            <Divider width={2} />
            <Text style={settingOptions}>
              {' '}
              <Text>
                <IconMaterial name="account-remove" size={24} />{' '}
              </Text>
              Delete Account
            </Text>
          </View>
          <TouchableOpacity style={button}>
            <Button title="Sign Out" color="white" onPress={handleSignOut} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Account;

const styles = StyleSheet.create({});
