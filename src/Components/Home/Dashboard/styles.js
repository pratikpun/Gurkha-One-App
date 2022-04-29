import {StyleSheet} from 'react-native';

const background = StyleSheet.create({
  backgroundColor: '#C1CFDA',
  height: '100%',
  width: '100%',
  flex: 1,
});

const itemsWrapper = StyleSheet.create({
  //   position: 'relative',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  height: 50,
  marginTop: 20,
  marginBottom: 20,
});

const itemA = StyleSheet.create({
  textAlign: 'center',
  fontSize: 20,
  margin: 10,
  fontWeight: 'bold',
  justifyContent: 'center',
});

const leftTeam = StyleSheet.create({
  textAlign: 'center',
  fontSize: 20,
  margin: 10,
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft: 20,
});
const rightTeam = StyleSheet.create({
  textAlign: 'center',
  fontSize: 20,
  margin: 10,
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: 20,
});
const scoreTitle = StyleSheet.create({
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 'bold',
  marginTop: 10,
});
export {background, itemA, scoreTitle, itemsWrapper, leftTeam, rightTeam};
