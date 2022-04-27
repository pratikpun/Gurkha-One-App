import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Button, Text, ScrollView} from 'react-native';
import {button} from '../../../Login/styles';
import {body} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const Search = () => {
  const [click, setClick] = useState(false);
  const [teamValue, setTeamValue] = useState({value: ''});
  const [searchTeam, setSearchTeam] = useState([]);

  const getTeamInfo = async () => {
    const res = await axios.post('http://localhost:9000/api/teams', teamValue);
    setSearchTeam(res.data);
  };

  const handleClick = () => {
    getTeamInfo();
    setClick(true);
  };
  return (
    <View style={{backgroundColor: '#C1CFDA', height: '100%'}}>
      {/* view the dropdown menu in rows */}
      <View style={{flexDirection: 'row', zIndex: 1}}>
        <SearchTeam setTeamValue={setTeamValue} />
      </View>
      {/* implement search function */}
      <TouchableOpacity style={button}>
        <Button title="Search" color="white" onPress={handleClick} />
      </TouchableOpacity>
      {/* {click && data && <ResultCard data={data} />} */}
      {searchTeam.length > 0 && <ResultCard searchTeam={searchTeam} />}
    </View>
  );
};

const SearchTeam = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const resp = await axios.get('http://localhost:9000/api/teams', {
      // must use jwtTokens in API headers when authCheck middleware is used in API routes.
      // headers: {
      //   Authorization: 'Bearer ' + value,
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
    });

    setData(resp.data);
  };

  const listOfTeams = [];

  data.forEach(item => {
    let row = {};
    row['label'] = item.teamName;
    row['value'] = item.teamName;
    listOfTeams.push(row);
  });

  //console.log(value);
  return (
    <View
      style={{
        width: '80%',
        marginLeft: 40,
        marginTop: 20,
      }}>
      {data.length > 0 && (
        <DropDownPicker
          open={open}
          value={value}
          items={listOfTeams}
          setOpen={setOpen}
          setValue={setValue}
          onSelectItem={item => {
            props.setTeamValue(prevState => ({
              ...prevState,
              value: item.value,
            }));
          }}
          //setItems={setItems}
          placeholder="Select a team..."
          searchable={true}
          searchPlaceholder="Enter team name..."
          selectedItemLabelStyle={{fontWeight: 'bold'}}
          selectedItemContainerStyle={body}
          bottomOffset={100}
          listMode="SCROLLVIEW"
        />
      )}
    </View>
  );
};

const ResultCard = props => {
  return (
    <View
      style={{
        height: 180,
        width: 300,
        backgroundColor: '#7899D4',
        borderRadius: 15,
        marginLeft: 45,
        marginTop: 50,
      }}>
      <Text style={{fontSize: 25, textAlign: 'center', margin: 5}}>
        {' '}
        {props.searchTeam[0].teamName}
        {/* {console.log(props.data.teamName)} */}
      </Text>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        {props.searchTeam[0].teamScore}
      </Text>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        {props.searchTeam[0].teamName} Logo
      </Text>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        {props.searchTeam[0].teamDesc} Description
      </Text>
    </View>
  );
};

export default Search;
