import axios from 'axios';
import { createContext, useState, useCallback } from 'react';

const CountriesContext = createContext(); 

function Provider({ children }) {
    const [countries, setCountries] = useState([]);
    const [searchedCountry, setSearchedCountry] = useState([]);
    const [filteredCountry, setFilteredCountry] = useState([]);

    const fetchCountries = useCallback(async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);

    }, []);

    const fetchSearchedCountry = useCallback(async (name) => { 
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        setSearchedCountry(response.data);

    }, []);

    const fetchFilteredCountry = useCallback(async (region) => { 
        const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
        setFilteredCountry(response.data);

    }, []);

    const value = {
        countries,
        searchedCountry,
        filteredCountry,
        fetchCountries,
        fetchSearchedCountry,
        fetchFilteredCountry
    };

    return (
        <CountriesContext.Provider value={value}>
            {children}
        </CountriesContext.Provider>
    );
}

export {  Provider };
export default CountriesContext;