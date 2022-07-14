import React, { useEffect, useState } from 'react';
import Country from '../components/Country';
import Header from '../components/Header';
import Select from '../components/Select';

function CountriesContainer() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    async function getCountries() {
        const response = await fetch('https://restcountries.com/v2/all');
        const countries = await response.json();
        setCountries(countries);
    }

    useEffect(() => {
        getCountries();
    }, []);

    function findSelectedCountry(alpha3Code) {
        const selectedCountry = countries.find((country) => {
            return country.alpha3Code === alpha3Code;
        });
        setSelectedCountry(selectedCountry);
    }

    const countryOptionsData = countries.map((country) => {
        return {
            key: country.alpha3Code,
            value: country.alpha3Code,
            text: country.name,
        };
    });

    return (
        <>
            <Header />
            <h2>Countries Container</h2>
            <Select
                label="Select a country"
                data={countryOptionsData}
                handler={findSelectedCountry}
            />
            {selectedCountry && <Country country={selectedCountry} />}
        </>
    );
}

export default CountriesContainer;
