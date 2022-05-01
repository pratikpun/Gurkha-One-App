import {StyleSheet} from 'react-native';

const header = StyleSheet.create({
  backgroundColor: '#9fc5e8',
  height: 40,
  fontSize: 20,
  fontWeight: 'bold',
  padding: 5,
  textAlign: 'center',
});

const userHeader = StyleSheet.create({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 20,
});

const settingOptions = StyleSheet.create({
  padding: 6,
  backgroundColor: 'white',
  height: 65,
  fontSize: 18,
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const settingText = StyleSheet.create({
  fontWeight: 'bold',
  fontSize: 18,
  marginLeft: 10,
  marginRight: 10,
});

const sectionTitle = StyleSheet.create({
  padding: 6,
  textAlign: 'center',
  height: 40,
  fontSize: 20,
  fontWeight: 'bold',
});
const modal = StyleSheet.create({
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
  },
});

export {header, settingOptions, sectionTitle, modal, settingText, userHeader};
