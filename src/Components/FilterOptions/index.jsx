import * as React from 'react';
import { useState, useEffect } from 'react';
import {TextField, Checkbox, Autocomplete} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export const FilterOptions = ({d}) => {

    const [selected, setSelected] = useState([]);

    const updateSelected = (event, value) => {
        console.log(`Value of ${d.name} filter: `, value);
        setSelected([...value]);
    } 

  return (
    <section>
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={d.options}
      disableCloseOnSelect
      value={selected}
      onChange={updateSelected}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props} style={{fontSize: '0.9rem'}}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8, height: '1rem'}}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: '14rem'}}
      renderInput={(params) => (
        <TextField {...params} size="small"
        />
      )}
    />
    </section>
  );
}

