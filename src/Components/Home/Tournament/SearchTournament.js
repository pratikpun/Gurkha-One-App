import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';
import {body, dropdown, dropdownYear} from './styles';
import axios from 'axios';
import {getActiveChildNavigationOptions} from 'react-navigation';

const SearchTournament = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    //{label: 'Reading Cup', value: 'readingCup'},
    //{label: 'Reading Cup', value: 'readingCup'},
    // {label: 'Swindon Cup', value: 'swindonCup'},
    // {label: 'Reading Cup', value: 'readingCup'},
  ]);

  useEffect(() => {
    getTournaments();
  }, []);

  const getTournaments = async () => {
    const resp = await axios.get('http://localhost:9000/api/tournaments', {
      // must use jwtTokens in API headers when authCheck middleware is used in API routes.
      // headers: {
      //   Authorization: 'Bearer ' + value,
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
    });

    setData(resp.data);
  };

  const listItems = [];

  data.map(item => {
    let row = {};
    row['label'] = item.Name;
    row['value'] = item.Name;
    listItems.push(row);
  });

  console.log(value);

  //console.log(data);
  return (
    <View style={dropdown}>
      {data.length > 0 && (
        <DropDownPicker
          open={open}
          value={value}
          items={listItems}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select a tournament..."
          searchable={true}
          searchPlaceholder="Enter tournament name..."
          selectedItemLabelStyle={{fontWeight: 'bold'}}
          selectedItemContainerStyle={body}
          listMode="SCROLLVIEW"
        />
      )}
    </View>
  );
};

const SearchTournamentYear = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '2022', value: '2022'},
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
  ]);

  return (
    <View style={dropdownYear}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a year..."
        searchable={true}
        searchPlaceholder="Enter year..."
        selectedItemLabelStyle={{fontWeight: 'bold'}}
        selectedItemContainerStyle={body}
        bottomOffset={100}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

export {SearchTournament, SearchTournamentYear};
