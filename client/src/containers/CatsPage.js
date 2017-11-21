import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CatsShow from './CatsShow';
import CatsNew from './CatsNew';
import CatsList from '../components/CatsList';

class CatsPage extends Component {

  render() {
    const { match, cats } = this.props;

  return (
    <div>
      <p></p>
      <CatsList cats={cats} />
      <Switch>
        <Route path={`${match.url}/new`} component={CatsNew}/>
        <Route path={`${match.url}/:catId`} component={CatsShow}/>
        <Route exact path={match.url} render={() => (
          <h3>Please select a cat from the list for more info.</h3>
        )}/>
      </Switch>

      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatsPage);
