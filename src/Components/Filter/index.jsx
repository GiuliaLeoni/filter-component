import { FilterItem } from '../FilterItem';
import { useState, useEffect } from 'react';
import { ListSubheader, Button } from '@mui/material';
import List from '@mui/material/List';

export const Filter = () => {

    // store dataset
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [clear, setClear] = useState(false);

    // apply selected options
    const [apply, setApply] = useState(false);
    const [appliedOptions, setAppliedOptions] = useState([]);

    useEffect(() => {

        console.log('Data Applied: ', appliedOptions);

    }, [appliedOptions]);

    const clearSelected = () => {
        setClear(true);
        setAppliedOptions([]);
        console.log('User cleared filters');
    }

    const applySelected = (event, value) => { 
        setApply(true);
        console.log('User applied data ');
    }

    // fetch data - empty array, only on mount
    useEffect(() => {
        fetch('../data.json')
            .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setData(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
    }, []);

    return (

        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader sx={{textAlign: 'left', fontSize: '1rem', fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'space-between'}} component="div" id="nested-list-subheader">
                FILTERS
                    <section>
                        <Button onClick={clearSelected}>Clear</Button>
                        <Button onClick={applySelected}>Apply</Button>
                    </section>
                </ListSubheader>
            }
            >
                {/* iterate through data */}
                {data.map((d, idx) => {
                    if(d.options.length > 0) {
                        return (<FilterItem 
                            key={idx} 
                            d={d}
                            clear={clear} 
                            setClear={setClear}
                            apply={apply}
                            setApply={setApply}
                            setAppliedOptions={setAppliedOptions}
                            appliedOptions={appliedOptions}
                        />)
                    }
                })
                }
            </List>
    )
}
