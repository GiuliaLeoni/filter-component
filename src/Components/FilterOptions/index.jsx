import * as React from 'react';
import { useState, useEffect } from 'react';
import {TextField, Checkbox, Autocomplete, Chip} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export const FilterOptions = ({d, selectedAmount, setSelectedAmount, selected, setSelected, clear, setClear, setOpen, apply, setApply, setAppliedOptions, appliedOptions}) => {
  
    useEffect(() => {
      if(clear) {
          setSelected([]);
          setSelectedAmount('');
          setOpen(false);
          setClear(!clear);
      }
      
      if(apply){
        setAppliedOptions((prevState) => [ ...(new Set([...prevState, ...selected]))]);
        setApply(false);
      }
  
  }, [clear, apply]);
  
      const updateSelected = (event, value) => {
          console.log(`Value of ${d.name} filter: `, value);
          !clear ? '' : setClear(!clear);
          value.length == 0 ? setSelectedAmount('') : setSelectedAmount(value.length);
          setSelected([...value]);
      } 
  
    return (
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={d.options}
        disableCloseOnSelect
        renderTags={(value, getTagProps) => {
          return value.map((option, index) => (
            <Chip
              sx={{color: '#346eb7', backgroundColor: '#ecf3fc', borderColor: '#346eb7', '& .MuiChip-deleteIcon': {
                color: '#346eb7',
              }}}
              variant="outlined"
              label={`${option.title}`}
              {...getTagProps({ index })}
            />
          ))}
        }
        value={selected}
        onChange={updateSelected}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8, height: '1rem'}}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        style={{ width: '14rem', maxWidth: '300'}}
        renderInput={(params) => (
          <TextField {...params} size="small" />
        )}
      />
    );
  }  
