import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.png';
import 'semantic-ui-css/semantic.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
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
        <div>
            <NavBar />
          </div>
          <div>
            <Routes />
          </div>
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
      cats: state.cats,
      filter: null
    }
  }

  function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }

export const StraydarApp = connect(mapStateToProps, mapDispatchToProps)(App)
