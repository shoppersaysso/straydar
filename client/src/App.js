import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CatsPage from './containers/CatsPage';
import CatsNew from './containers/CatsNew';
import Locations from './components/Locations';
import logo from './logo.png';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.fetch('api/cats')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Straydar</h2>
          </div>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/cats" component={CatsPage} />
            <Route exact path="/cats/new" component={CatsNew} />
            <Route exact path="/locations" component={Locations} />
          </div>
          <p className="App-intro">
            Help locate stray cats
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
