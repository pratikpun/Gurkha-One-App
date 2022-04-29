import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import TitleLine from '../Home/TitleLine';
import ScreenHeader from '../ScreenHeader';
import {view} from './styles';

const Reading = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: '#C1CFDA'}}>
      <ScreenHeader title="READING FC" />
      <TitleLine title="About" />
      <View style={view}>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
        <Text>This is the reaidng paf e </Text>
      </View>
      <TitleLine title="Contact" />
      <Button title="BACK" onPress={() => navigation.navigate('Teams')} />
    </ScrollView>
  );
};

export default Reading;
