

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl } from '@mui/material';

function Countrypicker({handleCountryChange}) {
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    // Fetch country data from the API
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryNames = response.data.map(country => country.name.common);
        setCountryNames(countryNames);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  return (
   <FormControl className={StyleSheet.formControl}>
      <label htmlFor="countrySelect">Select a country:</label>
      
      <select id="countrySelect" defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        {countryNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      </FormControl>
  );
}

export default Countrypicker;

