import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CatsList from './components/CatsList';
import CatsPage from './containers/CatsPage';
import CatsNew from './containers/CatsNew';
import Locations from './components/Locations';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.png';
import './App.css';
import * as actions from './actions/getCats'

export class App extends Component {

  constructor() {
    super();
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    this.props.actions.getCats()
  };

  render() {
    console.log(this.state.cats)
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


function mapStateToProps(state) {
  return {cats: state.cats}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
