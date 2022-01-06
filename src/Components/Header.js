import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.backgroundColor}>
      <Text style={styles.content}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
  },
  backgroundColor: {
    backgroundColor: '#52b69a',
    opacity: 0.8,
    justifyContent: 'center',
    height: '30%',
  },
});
