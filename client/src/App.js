import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.png';
import 'semantic-ui-css/semantic.css'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CatsShow from './containers/CatsShow';
import CatsPage from './containers/CatsPage';
import CatsNew from './containers/CatsNew';
import About from './components/About';
import Locations from './components/Locations';
import * as actions from './actions/catActions';

export class App extends Component {

  componentDidMount() {
   if (this.props.cats.length === 0) {
     console.log('component did mount')
     this.props.actions.catsFetch()
    }
   }

  render() {

    if (this.props.hasErrored) {
      return <p>Sorry, there was an error loading the cats</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>
    }
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
            <Route exaqct path="/cats" component={CatsPage} />
            <Route path="/about" component={About} />
          </div>
          <p className="App-intro">

          </p>
        </div>
      </Router>
    );
  }
}

  function mapStateToProps(state) {
    return {
      cats: state.cats
    }
  }

  function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }

export const StraydarApp = connect(mapStateToProps, mapDispatchToProps)(App)
