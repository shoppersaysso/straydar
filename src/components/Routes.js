import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import CatsShow from '../containers/CatsShow';
import CatsPage from '../containers/CatsPage';
import CatsNew from '../containers/CatsNew';
import About from './About';


export default class Routes extends Component {

  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cats" component={CatsPage} />
          <Route exact path="/cats/new" component={CatsNew} />
          <Route exact path="/cats/:catId" component={CatsShow} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}
