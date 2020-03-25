import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import CountriesList from './components/CountriesList';
import WeatherList from './components/WeatherList';
import Footer from './components/Footer';
import {BrowserRouter,
              Route,
              NavLink,
              Switch,
 

} from 'react-router-dom';


class App extends Component {
  state = {
          isToggleShowing: true,
          isExitShowing: false,
          addClass: true,
          hideClass: true,
          isClicked: false
  }
   
  toggle = () => {
    this.setState({
          addClass: !this.state.addClass, 
          hideClass: !this.state.hideClass, 
          isToggleShowing: false, 
          isExitShowing: true})
    
}

  close = () => {
    this.setState({
          addClass: !this.state.addClass, 
          isToggleShowing: true, 
          isExitShowing: false})

}
  render() {
    let navLinksClass = ["navbar-links open"];
    if(this.state.addClass) {
        navLinksClass.push("open");
    }
   
  return (
    <BrowserRouter>
        <div className="wrapper">
          <nav className="navbar">
          {this.state.isToggleShowing ? <div className="hamburger-bar hide-desktop show-tablet" id="open-button" onClick={this.toggle}> 
              <i className="fas fa-bars fa-2x"></i>
              </div> : null }
              {this.state.isExitShowing ? <div className="exit" id="exit-button" onClick={this.close}><i className="fas fa-times fa-2x"></i></div> : null }
            <ul className={navLinksClass.join('')}>
              <li><NavLink to ="/" className="nav-link" activeStyle={navLinkStyle} exact>
                Home
                </NavLink></li>

              <li><NavLink to ="/about" className="nav-link" activeStyle={navLinkStyle}>
                About
                </NavLink></li>

              <li><NavLink to ="/countries" className="nav-link" activeStyle={navLinkStyle}>
                Countries Data
                </NavLink></li>

              <li><NavLink to ="/weather" className="nav-link" activeStyle={navLinkStyle}>
                Weather Data
                </NavLink></li>

      </ul>
    </nav>

    <Switch>
    <Route path="/about"><About /></Route>
      <Route path="/countries"><CountriesList /></Route>
      <Route path="/weather"><WeatherList /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
    </div>
  <Footer />
    </BrowserRouter>

)
}

  }

const navLinkStyle = {color: 'orange', background: 'none'};
export default App;

