import React, { Component } from 'react';
import '../App.css';
import CountryWeather from './CountryWeather';
import '../assets/style/weatherlist.css';
import { v4 as uuidv4 } from 'uuid';

let weatherIcons = {
  sun: 'fas fa-sun fa-4x',
  cloudNight: 'fas fa-cloud-moon fa-4x',
  cloudRain: 'fas fa-cloud-rain fa-4x',
  rain: 'fas fa-cloud-showers-heavy fa-4x',
  partlyCloudy: 'fas fa-cloud-sun fa-4x',
  cloudy: 'fas fa-cloud fa-4x',
  fog: 'fas fa-fog fa-4x'

}

// const APIKEY = `9b73e51184eb900e20ca310ae752b7b0`;
// const APIKEY = `45f9915167b1ed07547b187a63d239d5`;
const openKEY = '7c2f794ea06534fefdbd38ae67cdfd84'; 


/*
let backgroundColors = [
  {backgroundImage: 'var(--sunny)'},
  {backgroundImage: 'var(--clear)'},
  {backgroundImage: 'var(--cloudy)'}

  
]*/

// let backgroundColors = [
//   {backgroundColor: 'orange'},
//   {backgroundColor: 'skyblue'},
//   {backgroundColor: 'grey'}

  
// ]


class WeatherList extends Component {
  //class app is a child of rect.component
  constructor(props) {
    super(props)
    //super connects the child with the parent
    this.state = {
                  query: 'Helsinki',
                  isSingleCountryLoaded: false,
                  search: '',
                  weather: [],
                  filteredWeather: [],
                  newWeather: [],
                  isUpdating: false,
                  text: '',
                  warning: ''
                  }
            }

  // mounting
  componentDidMount() {
    
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=${openKEY}`
    fetch(openWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      let weatherArr = [];
      let {id, name} = data;
      let {speed, deg} = data.wind;
      let {country} = data.sys
      let {temp, feels_like, temp_min, temp_max, pressure, humidity} = data.main;
      let k = -273.15
      temp = Math.ceil(temp + k);
      feels_like = Math.ceil(feels_like + k);
      temp_min = Math.ceil(temp_min + k);
      temp_max = Math.ceil(temp_max + k);

      let weather = data.weather;
      let weatherDescription = '';
      for(const w of weather) {
        let {main} = w;
        weatherDescription = weatherDescription + main;
    
      }
    
      weatherArr.push({id, name, country, weatherDescription, temp, feels_like, temp_min, temp_max, pressure, humidity, speed, deg})
      this.setState({weather: weatherArr})
    })
   
    /*
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=${this.state.query}`
    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      let weatherArr = [];
      let id = uuidv4();
      let name = data.location.name;
      let country = data.location.country;
      let description = data.current.weather_descriptions;
      let temperature = data.current.temperature;
      let localTime = data.location.localtime;
      let timeZone = data.location.timezone_id;
      let humidity = data.current.humidity;
      let icon = data.current.weather_icons;
      let feelsLike = data.current.feelslike

      weatherArr.push({id, name, country, temperature, description, timeZone, localTime, humidity, icon, feelsLike})
      this.setState({weather: weatherArr, filteredWeather: weatherArr, isLoading: true })
        
      
     
    })*/
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({isUpdating: true})
  
  }
 
  
  handleChange = (e) => {
    let {value} = e.target;
    this.setState({query: value})
  
  }


  
  componentDidUpdate() {
    if(this.state.query.length > 3 && this.state.isUpdating === true) {
      const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=${openKEY}`
    fetch(openWeatherUrl)
    .then(response => response.json())
    .then(data => {
      
      let weatherArr = [];
      let {id, name} = data;
      let {speed, deg} = data.wind;
      let {country} = data.sys
      let {temp, feels_like, temp_min, temp_max, pressure, humidity} = data.main;
      let k = -273.15
      temp = Math.ceil(temp + k);
      feels_like = Math.ceil(feels_like + k);
      temp_min = Math.ceil(temp_min + k);
      temp_max = Math.ceil(temp_max + k);
        
      let weather = data.weather;
      let weatherDescription = '';
          for(const w of weather) {
              let {main} = w;
              weatherDescription = weatherDescription + main;

  }

  weatherArr.push({id, name, country, weatherDescription, temp, feels_like, temp_min, temp_max, pressure, humidity, speed, deg})
      this.setState({weather: weatherArr, isUpdating: false})


      }
      
      )
 

        
    }
    /*
    let weatherArr = []
    if(this.state.search.length > 3 && this.state.isUpdating === true) {
          const weatherUrl = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=${this.state.search}`
          fetch(weatherUrl)
          .then(response => response.json())
          .then(data => {
          
          let name = data.location.name;
          let country = data.location.country;
          let description = data.current.weather_descriptions;
          let temperature = data.current.temperature;
          let humidity = data.current.humidity;
          let localTime = data.location.localtime;
          let timeZone = data.location.timezone_id;
          let icon = data.current.weather_icons;
          let feelsLike = data.current.feelslike
          
          // for(const weather in data) {
        
            if(name.toLowerCase().includes(this.state.search) || name.includes(this.state.search)) {

            weatherArr.push({name, country, temperature, description, humidity, localTime, timeZone, icon, feelsLike})
            this.setState({filteredWeather: weatherArr, query: this.state.search, isUpdating: false})
            
              

           }
        }
          
        )
        
        }*/

    }

    addCountry = (e) => {
      let newWeatherObj = {};
      let id = e.target
      console.log(id)
      let weatherID = ''
      for(const weather of this.state.newWeather) {
        let { id } = weather;
        weatherID = id;
      }
      console.log(weatherID)
        for(const weather of this.state.weather) {
          let {id, name, country, temp, weatherDescription} = weather;
          if(id === weatherID) {
            this.setState({warning: 'City is already present'})
          } else {
            newWeatherObj.id = id;
            newWeatherObj.name = name;
            newWeatherObj.country = country;
            newWeatherObj.temp = temp;
            newWeatherObj.weatherDescription = weatherDescription;
            this.setState({newWeather:[newWeatherObj, ...this.state.newWeather] , text: `${this.state.newWeather.length} weather cards`})
          }
   
        
      }
      }
    
    

    deleteCountry = (id) => {
        let undeletedCountries = this.state.newWeather.filter((country) => country.id !== id) 
        this.setState({newWeather: undeletedCountries})
        console.log(this.state.newWeather)
        console.log(this.state.filteredWeather.length)
      

    }


  render() {
  
    //display data in the header
      let city = '';
      let temperature = '';
      let feels = '';
      let description = '';
      for(const weather of this.state.weather) {
        let {name, temp, feels_like, weatherDescription} = weather;
        city = city + name;
        temperature = temperature + temp;
        feels = feels + feels_like;
        description = description + weatherDescription;
      }
    

    let weatherCountry = this.state.weather.map((country) => (
    
      <CountryWeather  key = {country.id}
                       weather={country} />
    ))
  
      let newCountryWeather = this.state.newWeather.map((country) => (
        <div className="added-country" key={country.id}>
          <div className="added-country-exit__container">
          <i className="fas fa-times-circle" 
          onClick={()=>this.deleteCountry(country.id)}>
          </i>
          </div>
          <div className="weather-country__body">
          <h5 className="country">{country.name}</h5>
          <p>Country: {country.country}</p>
          <p>Temperature: {country.temp}°</p>
          <p>{country.weatherDescription}</p>
          {/* <img src={country.icon} className="image-icon" alt="weather"/>
          <i className={weatherIcons}></i> */}
          </div>

        </div>
      ))

      
    
      return (
        <div className="wrapper">
           <div className="container">
              <div className="header">
                  <div className="header-top__weather">
                  <h2 className="title">Weather Data - {city}</h2>
                  <p className="deg">{description}</p>
                  <h5 className="deg">{temperature}°</h5>
                  <h5 className="deg">Feels Like: {feels}°</h5>
              </div>
                  <form className="form weather-form" onSubmit={this.handleSubmit}>     
                  <input className="search-input search-input__weather" 
                      name='country'
                      onChange={this.handleChange}
                      placeholder="Search weather by city" />    
                      <div className="search-add__wrapper">       
                        <button className="weather-btn">Search</button>  
                         <i className="fas fa-plus-circle fa-2x" onClick={this.addCountry}></i> 
                         </div>
                  </form>
                  <p>{this.state.warning}</p>                

              </div>
              <div className="new-countries-weather__wrapper">
              {
                this.state.newWeather.length > 0 ?
                <h4 className="text-cards">{this.state.newWeather.length} Weather Cards</h4>
                : ''
              }
            </div>

         <div className="new-countries-weather__wrapper">{newCountryWeather}</div>
         <div className="countries-weather__wrapper">{weatherCountry}</div>
              
          </div>
        </div>
      )
    }
    
  }

     
  
export default WeatherList;
