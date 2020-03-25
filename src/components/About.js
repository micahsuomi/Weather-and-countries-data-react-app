import React, { Component } from 'react';
import '../assets/style/about.css';
const linkRest = 'https://restcountries.eu/';
const linkWeather = 'https://openweathermap.org/';


class About extends Component {
    state={
            isShowing: false

    }

    showHide = () => this.setState({isShowing: !this.state.isShowing});

    render() {
        return (
            <div className="about-container">
                <div className="about-wrapper">
                    <h1 className="about-title">About</h1>
                    <p className="about-paragraph">This project was built during my full-stack web development course at Integrify Coding Academy in Helsinki. The project uses <a href={linkWeather} target="blank">OpenWeather</a>  and <a href={linkRest} target="blank">REST COUNTRIES</a> APIs. While the REST COUNTRIES APIs is free, the WeatherStack API offers a free subscription of 1000 calls per month. It is a gret API to use to fetch and display weather data.<br/><br/>
                    In this application can search countries by name or capital and sort result by name, capital or population.</p>
                    

                    {
                        this.state.isShowing ? <p className="about-paragraph">The REST countries API returns a result of 250 countries displaying name, city, population, area, region and languages. The data is always updated. The weather API returns a single result matching your search by city.</p> : ''
                    }

                    <button className="show-btn" onClick={this.showHide}>{this.state.isShowing ? 'Show Less' : 'Show More'}</button>
                </div>
            </div>
        )
    }
    }
    

export default About;