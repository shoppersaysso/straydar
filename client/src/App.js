import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import logo from './logo.png';
import 'semantic-ui-css/semantic.css'
import './App.css';
// import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CatsList from './components/CatsList';
// import CatsPage from './containers/CatsPage';
import CatsNew from './containers/CatsNew';
import About from './components/About';
import Locations from './components/Locations';
import * as actions from './actions/catActions';

export class App extends Component {

  componentDidMount() {
   if (this.props.cats.length === 0) {
     console.log('in component did mount')
     this.props.actions.catsFetch()
     this.props.actions.locationFetch()
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
            <Route exact path="/cats" component={CatsList} />
            <Route exact path="/cats/new" component={CatsNew} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/about" component={About} />
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
      locations: state.locations
    }
  }

  function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }

export const StraydarApp = connect(mapStateToProps, mapDispatchToProps)(App)
