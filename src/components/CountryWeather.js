import React from 'react';
import '../assets/style/country.css';
import '../assets/style/countryweather.css';



const CountryWeather = (props) => {
    let {name, country, localTime, timeZone, temperature, description, humidity, icon, feelsLike} = props;
    console.log(props)
    let weatherIcon = 
        {sun: 'fas fa-sun fa-4x',
        cloudNight: 'fas fa-cloud-moon fa-4x',
        cloudRain: 'fas fa-cloud-rain fa-4x',
        rain: 'fas fa-cloud-showers-heavy fa-4x',
        partlyCloudy: 'fas fa-cloud-sun fa-4x',
        cloudy: 'fas fa-cloud fa-4x',
        fog: 'fas fa-fog fa-4x'


}

console.log(weatherIcon)


 if(description.includes('Sunny')) {
    weatherIcon = weatherIcon.sun

 } else if(description.includes('Clear')) {
    weatherIcon = weatherIcon.cloudNight;

 } else if(description.includes('Mist')) {
    weatherIcon = weatherIcon.partlyCloudy;

 } else if(description.includes('Light Drizzle And Rain')) {
    weatherIcon = weatherIcon.cloudRain;
    
 } else if(description.includes('Partly cloudy')) {
    weatherIcon = weatherIcon.partlyCloudy;

 }  else if(description.includes('Cloudy')) {
    weatherIcon = weatherIcon.cloudy;

 }
 else if(description.includes('Rain Shower') || 
 description.includes('Light Rain Shower, Rain Shower') || 
 description.includes('Shower In Vicinity')) {
    weatherIcon = weatherIcon.rain;

 }
    return (
        <div className="country-weather__container">          
            <i className={weatherIcon}></i>
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