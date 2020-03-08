import React, { Component } from 'react';
import Country from './Country';
import '../assets/style/countrieslist.css'; 
import Loader from './Loader';


let flag = false;

const toggle = () => {
  flag = !flag;
  return flag;
}


class CountriesList extends Component {
  //class app is a child of rect.component
  constructor(props) {
    super(props)
    //super connects the child with the parent
    this.state = {
                  countries: [],
                  filteredCountries: [],
                  isLoading: false,
                  isBtnNameClicked: false,
                  isBtnCapitalClicked: false,
                  isBtnPopulationClicked: false,
                  isSingleCountryLoaded: false,
                  text: '',
                  isTextDisplaying: false,
                  arrowUp: '',
                  
                  }
            }

  // mounting
  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let countryArr = [];
      for (const country of data) {
        let {flag, name, capital, population, area, region, languages, currencies} = country;
        countryArr.push({flag, name, capital, population, area, region, languages, currencies})
      }
      this.setState({countries: countryArr, filteredCountries: countryArr, isLoading: true})
      console.log('I am fetching data')
  
    })

  }

 
 
  sortByName = () => {
    this.setState({isBtnNameClicked: true, isBtnCapitalClicked: false, isBtnPopulationClicked: false})
    if(flag === true) {
      this.state.filteredCountries.sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    })      
      this.setState({arrow: 'fas fa-long-arrow-alt-up'});

  } else {
      this.setState({arrow: 'fas fa-long-arrow-alt-down'});
      this.setState({filteredCountries: this.state.filteredCountries.reverse()})
  }
  toggle();

  }

 
  sortByCapital = () => {
    this.setState({isBtnCapitalClicked: true, isBtnNameClicked: false, isBtnPopulationClicked: false})
    if(flag === true) {
      this.state.filteredCountries.sort((a, b) => {
        if(a.capital < b.capital) return -1;
        if(a.capital > b.capital) return 1;
        return 0;
    })
      this.setState({arrow: 'fas fa-long-arrow-alt-up'});

    } else {
      this.setState({filteredCountries: this.state.filteredCountries.reverse()})
      this.setState({arrow: 'fas fa-long-arrow-alt-down'});

    }
    toggle()

  }

  sortByPopulation = () => {
    this.setState({isBtnPopulationClicked: true, isBtnNameClicked: false, isBtnCapitalClicked: false})
    if(flag === true) {
      this.state.filteredCountries.sort((a, b) => {
        if(a.population < b.population) return -1;
        if(a.population > b.population) return 1;
        return 0;
    })
      this.setState({arrow: 'fas fa-long-arrow-alt-up'});

    } else {
      this.setState({filteredCountries: this.state.filteredCountries.reverse()})
      this.setState({arrow: 'fas fa-long-arrow-alt-down'});

    }
    toggle()

  }
 

  handleSubmit = (e) => {
    e.preventDefault();
  
  }
 
  
  handleChange = (e) => {
    let countryArr = [];
    let {value} = e.target;
    this.setState({filteredCountries: value})
    console.log(value, this.state.filteredCountries)
      for(const country of this.state.countries) {
        let {flag, name, capital, area, region, population} = country
        let languages = country.languages.map((language) => language)
        let currencies = country.currencies.map((currency) => currency)  
        if(country.name.includes(value) || country.name.toLowerCase().includes(value) ||country.capital.includes(value) || country.capital.toLowerCase().includes(value)) {
        
        countryArr.push({flag, name, capital, population, area, region, languages, currencies});
        this.setState({filteredCountries: countryArr})
        console.log('I am displaying countries')
  
        }
        if(value.length > 0) {
          this.setState({text: `${countryArr.length} countries satisfy the criteria.`, isTextDisplaying: true})
        } else {
          this.setState({text: ''})
        }
       
  
  
    }

  }

 
 
  render() {
  
    let countriesList = this.state.filteredCountries.map((country) => (
      
      <Country key = {country.name}
               img={country.flag}
               name={country.name}
               capital={country.capital}
               population={country.population}
               languages={`${country.languages.map((language) => language.name)}`}
               currencies={`${country.currencies.map((currency) => currency.name)}`}
              />
    ))

  
      return (
           <div className="">
              <div className="header">
                  <div className="header-top">
                  <h2 className="title">Countries Data</h2>
                  <h4 className="subtitle">Currently, we have {this.state.countries.length} countries</h4>
                  {this.state.isTextDisplaying ?
                    <p className="result-paragraph">{this.state.text}</p>
                  :
                  null}
              </div>
                  <form className="form" onSubmit={this.handleSubmit}>     
                  <input className="search-input" 
                      value={this.state.country} 
                      name='country'
                      onChange={this.handleChange}
                      placeholder="Search countries by name or city" />           
                      <div className="buttons-wrapper">
                      <button className="btn name-btn" style={this.state.isBtnNameClicked ? style1 : style2} onClick={this.sortByName}>Name{this.state.isBtnNameClicked ? <i className={this.state.arrow}></i> : null}</button>
  
                      <button className="btn capital-btn" style={this.state.isBtnCapitalClicked ? style1 : style2} onClick={this.sortByCapital}>Capital{this.state.isBtnCapitalClicked ? <i className={this.state.arrow}></i> : null}</button>
                      
                      <button className="btn population-btn" style={this.state.isBtnPopulationClicked ? style1 : style2} onClick={this.sortByPopulation}>Population{this.state.isBtnPopulationClicked ? <i className={this.state.arrow}></i> : null}</button> 
                      <p>{this.state.warning}</p>
                  </div>
              </form>
  
              </div>
   {
   this.state.isLoading ? 
        <div className ="countries-wrapper">
          {countriesList}</div> :
         <Loader />
  }
          </div>
      
       
   

     )
    
  }
}
     
  
 
const style1 = {backgroundColor: 'rgb(57, 20, 145)'};
const style2 = {backgroundColor: 'rgb(143, 101, 240)'};
export default CountriesList;