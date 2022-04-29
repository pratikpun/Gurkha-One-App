import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ScreenHeader = ({title}) => {
  return (
    <View style={styles.backgroundColor}>
      <Text style={styles.content}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  content: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  backgroundColor: {
    //backgroundColor: '#52b69a',
    backgroundColor: '#FFFFFF',
    //opacity: 0.8,
    justifyContent: 'center',
    height: 130,
  },
});
