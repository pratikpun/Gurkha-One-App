import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';
import {body, dropdown, dropdownYear} from './styles';
import axios from 'axios';

const SearchTournament = props => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    getTournaments();
  }, []);

  const listItems = [];
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

  // filter out duplicate names from the data
  const dupNames = data.map(item => item.Name);
  const filterdData = data.filter(
    ({Name}, index) => !dupNames.includes(Name, index + 1)
  );

  // add the unique names into the lables
  filterdData.forEach(item => {
    let row = {};
    row['label'] = item.Name;
    row['value'] = item.Name;
    listItems.push(row);
  });

  return (
    <View style={dropdown}>
      {data.length > 0 && (
        <DropDownPicker
          open={open}
          value={value}
          items={listItems}
          setOpen={setOpen}
          setValue={setValue}
          onSelectItem={item => {
            props.setTournamentValue(prevState => ({
              ...prevState,
              value: item.value,
            }));
          }}
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
