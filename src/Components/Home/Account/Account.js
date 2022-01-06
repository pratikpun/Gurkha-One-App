import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {button} from '../../../Login/styles';
import {useNavigation} from '@react-navigation/native';
import {header, settingOptions, sectionTitle} from './styles';
import {Divider} from 'react-native-elements';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text style={header}>Welcome (Username).</Text>
        <Divider width={2} />
        <View>
          <Text style={sectionTitle}>Profile</Text>
          <Text style={settingOptions}>
            <Text>
              <IconFont name="heart" size={20} />{' '}
            </Text>
            Favourite Teams
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
          <Button
            title="Sign Out"
            color="white"
            onPress={() => navigation.navigate('Login')}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Account;

const styles = StyleSheet.create({});
