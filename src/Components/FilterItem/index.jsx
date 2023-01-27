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
// import filterStyles from './filterItem.module.scss';

const theme = createTheme({
    textColor: '#808080',
  });

export const FilterItem = ({d}) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={theme}>
            <ListItemButton variant="persistent" disableRipple onClick={handleClick}>
                <ListItemText sx={{color: theme.textColor}} primary={d.name} />
                {open ? <ExpandLess sx={{color: theme.textColor}}/> : <ExpandMore sx={{color: theme.textColor}}/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {/* Filter Options for specific ListItemButton */}
                <List component="div" sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    {/* Filter options  */}
                    <FilterOptions />
                </List>
            </Collapse>
        </ThemeProvider>
    )
}
