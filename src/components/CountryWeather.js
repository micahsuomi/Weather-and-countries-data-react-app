import React from 'react';
import '../assets/style/country.css';
import '../assets/style/countryweather.css';


const CountryWeather = (props) => {
   let {name, country, weatherDescription, temp, feels_like, temp_min, temp_max, pressure, humidity, speed, deg} = props.weather;
  
    let weatherIcons = {
      sun: 'fas fa-sun fa-4x',
      cloudNight: 'fas fa-cloud-moon fa-4x',
      cloudRain: 'fas fa-cloud-rain fa-4x',
      rain: 'fas fa-cloud-showers-heavy fa-4x',
      partlyCloudy: 'fas fa-cloud-sun fa-4x',
      cloudy: 'fas fa-cloud fa-4x',
      fog: 'fas fa-fog fa-4x',
      snow: 'fas fa-snowflake fa-4x'

}
            
  let backGroundStyles = [
   {
       backgroundColor: 'skyblue'
   },
   {
     backgroundColor: 'orange'
 },
 {
     backgroundColor: 'grey'
 },
]

     let index = 0;
     if(weatherDescription.includes('Clouds')) {
         index =+ 2
          backGroundStyles = backGroundStyles[index];
         weatherIcons = weatherIcons.cloudy
     } else if(weatherDescription.includes('Clear')) {
         weatherIcons = weatherIcons.sun
         index = 0
          backGroundStyles = backGroundStyles[index];

     } else if(weatherDescription.includes('RainHaze') || 
     (weatherDescription.includes('Rain'))) {
         weatherIcons = weatherIcons.cloudRain

     } else {
         weatherIcons = weatherIcons.cloudRain

     }
    return (
        <div className="country-weather__container">          
            <i className={weatherIcons}></i>
            <h4>{name}</h4>
            <p>Country: {country}</p>
            <p>Weather Description: {weatherDescription}</p>
            <p>Temp: {temp} C</p>
            <p>Feels Like: {feels_like}</p>
            <p>Min Temp: {temp_min} C</p>
            <p>Max: Temp {temp_max} C</p>
            <p>Humidity: {humidity}</p>
            <p>Wind Speed: {speed}</p>
            <p>Wind Deg: {deg}</p>
            <p>Pressure: {pressure}</p>


        </div>
    )
}

export default CountryWeather;