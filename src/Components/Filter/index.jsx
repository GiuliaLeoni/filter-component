import { FilterItem } from '../FilterItem';
import { useState, useEffect } from 'react';

export const Filter = () => {

    // store dataset
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // fetch data - empty array, only on mount
    useEffect(() => {
        fetch('../data.json')
            .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setData(result);
                        console.log(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
    }, []);

    return (
        // iterate through data
        <FilterItem />
    )
}
