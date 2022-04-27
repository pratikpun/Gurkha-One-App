import {StyleSheet} from 'react-native';

const titleText = StyleSheet.create({
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
});

const listofTeams = StyleSheet.create({
  marginTop: 10,
  paddingLeft: 10,
  fontSize: 20,
});

const eachTeam = StyleSheet.create({
  fontSize: 20,
  margin: 10,
  borderWidth: 1,
  padding: 10,
});

const hidden = StyleSheet.create({
  display: 'none',
});

export {titleText, listofTeams, eachTeam, hidden};
