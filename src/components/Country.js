import React from 'react';
import '../assets/style/country.css';

const Country = (props) => {
    let {img, name, capital, population, languages, currencies} = props;
        
    return (
        <div className="country-container">
            <img src={img} alt="country pic" className="flag"/>
            <h3 className="country-name">{name}</h3>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Languages: {languages}</p>
            <p>Currencies: {currencies}</p>
        </div>
    )
}

export default Country;