import React from 'react';

function Country({ country }) {
    return (
        <>
            <h2>{country.name} {country.name !== country.nativeName && `(${country.nativeName})`}</h2>
            <ul>
                <li>Region: {country.region}</li>
                <li>Sub-region: {country.subregion}</li>
                <li>Population: {country.population}</li>
            </ul>
        </>
    );
}

export default Country;
