import React from 'react';
import '../assets/style/country.css';
import '../assets/style/countryweather.css';

const CountryWeather = (props) => {
    let {name, country, localTime, timeZone, temperature, description, humidity, icon, feelsLike} = props;
    console.log(props)
    return (
        <div className="country-weather__container">          
            <img src={icon} alt="weather" className="weather-icon"/>
            <h4>Country: {country}</h4>
            <p>City: {name}</p>
            <p>Local Time: {localTime}</p>
            <p>Time Zone: {timeZone}</p>
            <p>Temperature: {temperature} C</p>
            <p>{description}</p>
            <p>Humidity: {humidity}</p>
            <p>Feels Like: {feelsLike}</p>
        </div>
    )
}

export default CountryWeather;