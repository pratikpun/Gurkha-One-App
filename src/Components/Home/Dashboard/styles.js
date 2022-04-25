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
  flexDirection: 'row',
  justifyContent: 'center',
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
});
const itemB = StyleSheet.create({
  textAlign: 'center',
  fontSize: 30,
});
export {background, itemA, itemB, itemsWrapper};
