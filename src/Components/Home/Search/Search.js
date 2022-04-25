import React, {useState} from 'react';
import {TouchableOpacity, View, Button, Text, ScrollView} from 'react-native';
import {button} from '../../../Login/styles';
import {body} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';

const Search = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <View style={{backgroundColor: '#C1CFDA', height: '100%'}}>
      {/* view the dropdown menu in rows */}
      <View style={{flexDirection: 'row', zIndex: 1}}>
        <SearchTeam />
      </View>
      {/* implement search function */}
      <TouchableOpacity style={button}>
        <Button title="Search" color="white" onPress={handleClick} />
      </TouchableOpacity>

      {click ? <ResultCard /> : null}
    </View>
  );
};

const SearchTeam = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Reading FC', value: 'readingFC'},
    {label: 'Kent FC', value: 'kentFC'},
    {label: 'Swindon FC', value: 'swindonFC'},
  ]);

  return (
    <View
      style={{
        width: '80%',
        marginLeft: 40,
        marginTop: 20,
      }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a team..."
        searchable={true}
        searchPlaceholder="Enter team name..."
        selectedItemLabelStyle={{fontWeight: 'bold'}}
        selectedItemContainerStyle={body}
        bottomOffset={100}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

const ResultCard = () => {
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
        Team Name
      </Text>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        Reading FC
      </Text>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        Reading FC Logo
      </Text>
      <Text style={{fontSize: 18, textAlign: 'left', margin: 5}}>
        Team Description
      </Text>
    </View>
  );
};

export default Search;
