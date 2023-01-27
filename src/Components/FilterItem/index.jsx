import React from "react";
import { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Collapse } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { FilterOptions } from '../FilterOptions';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    textColor: '#808080',
  });

export const FilterItem = ({d, clear, setClear, apply, setApply, setAppliedOptions, appliedOptions}) => {
    const [open, setOpen] = React.useState(false);
    const [selectedAmount, setSelectedAmount] = useState('');
    const [selected, setSelected] = useState([]);

    const handleClick = () => {
        setOpen(!open);
    };

    let value = '';
    clear ? {value} = '' : value = selectedAmount;

    return (
        <ThemeProvider theme={theme}>
            <ListItemButton variant="persistent" disableRipple onClick={handleClick}>
                <ListItemText sx={{color: theme.textColor}} primary={d.name} />
                <span style={{paddingLeft: '0.5rem', paddingRight: '0.5rem', color: '#346eb7', fontWeight: 'bold', backgroundColor: '#ecf3fc', borderRadius: '0.5rem', marginRight: '0.5rem'}}>{value}</span>
                {open ? <ExpandLess sx={{color: theme.textColor}}/> : <ExpandMore sx={{color: theme.textColor}}/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {/* Filter Options for specific ListItemButton */}
                <List component="div" sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <FilterOptions 
                        d={d} 
                        selected={selected}
                        setSelected={setSelected}
                        selectedAmount={selectedAmount} 
                        setSelectedAmount={setSelectedAmount}
                        clear={clear}
                        setClear={setClear}
                        setOpen={setOpen}
                        apply={apply}
                        setApply={setApply}
                        setAppliedOptions={setAppliedOptions}
                        appliedOptions={appliedOptions}/>
                </List>
            </Collapse>
        </ThemeProvider>
    )
}
