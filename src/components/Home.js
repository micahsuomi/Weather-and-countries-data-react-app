import React, { Component } from 'react';
import '../assets/style/home.css';

class Home extends Component {
    state = {
        isShowing: false

    }
    render() {
        return (
            <div className="home-container">
                <h1 className="home-title">World Countries and Weather Data</h1>
                <h2 className="home-subtitle">Data on countries and weather using countries and weather APIs</h2>
                <div className="animation-name__container">
                    <p className="home-animation__name">Home Page Animation CopyRight by Lennart Hase</p>
                </div>
            </div>
        )
    }

    }
   
export default Home;
