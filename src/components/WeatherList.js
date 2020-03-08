import React, { Component } from 'react';
import '../App.css';
import CountryWeather from './CountryWeather';
import '../assets/style/weatherlist.css';


const APIKEY = `0c751e60fbf6c5089bf0cfa06a2f7d5b`;


class WeatherList extends Component {
  //class app is a child of rect.component
  constructor(props) {
    super(props)
    //super connects the child with the parent
    this.state = {
                  query: 'Finland',
                  isSingleCountryLoaded: false,
                  search: '',
                  weather: [],
                  filteredWeather: [],
                  isUpdating: false
                  }
            }

  // mounting
  componentDidMount() {
   
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=${this.state.query}`
    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      let weatherArr = [];
      let name = data.location.name;
      let country = data.location.country;
      let description = data.current.weather_descriptions;
      let temperature = data.current.temperature;
      let localTime = data.location.localtime;
      let timeZone = data.location.timezone_id;
      let humidity = data.current.humidity;
      let icon = data.current.weather_icons;
      let feelsLike = data.current.feelslike

      weatherArr.push({name, country, temperature, description, timeZone, localTime, humidity, icon, feelsLike})
      this.setState({weather: weatherArr, filteredWeather: weatherArr, isLoading: true })
      console.log(this.state.weather)
        
      
     
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
  
  }
 
  
  handleChange = (e) => {
    let {value} = e.target;
    this.setState({search: value, isUpdating: true})
  
  }

  

  // updating 
 
  
  componentDidUpdate() {
    let weatherArr = []
    if(this.state.search.length > 3 && this.state.isUpdating === true) {
          console.log('new query', this.state.search)
          const weatherUrl = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=${this.state.search}`
          fetch(weatherUrl)
          .then(response => response.json())
          .then(data => {
          console.log(data)
          
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
            console.log(name)
        
            if(name.toLowerCase().includes(this.state.search) || name.includes(this.state.search) || country.toLowerCase().includes(this.state.search) || country.includes(this.state.search)) {
            console.log('I am here')

            weatherArr.push({name, country, temperature, description, humidity, localTime, timeZone, icon, feelsLike})
            this.setState({filteredWeather: weatherArr, query: this.state.search, isUpdating: false})
              

           }
        }
          
        )
        
        }

    }


  render() {
  
   
    let weatherCountry = this.state.filteredWeather.map((country, index) => (
      
      <CountryWeather key = {index}
               icon={country.icon}
               name={country.name}
               country={country.country}
               localTime={country.localTime}
               timeZone={country.timeZone}
               temperature={country.temperature}
               description={country.description}
               humidity={country.humidity}
               feelsLike={country.feelsLike}

              />
    ))
      return (
        <div className="wrapper">
           <div className="container">
              <div className="header">
                  <div className="header-top__weather">
                  <h2 className="title">Weather Data - {this.state.query}</h2>
              </div>
                  <form className="form weather-form" onSubmit={this.handleSubmit}>     
                  <input className="search-input search-input__weather" 
                      name={this.state.query} 
                      value={this.state.search}
                      onChange={this.handleChange}
                      placeholder="Search weather by country or city" />           
                        <button className="weather-btn">Search</button>                     
              </form>
  
              </div>
        
        
         <div className="countries-weather__wrapper">{weatherCountry}</div>
              
          </div>
        </div>
      )
    }
    
  }

     
  
export default WeatherList;
