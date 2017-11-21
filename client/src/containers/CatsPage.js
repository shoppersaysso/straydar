import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CatsShow from './CatsShow';
import CatsList from '../components/CatsList';

class CatsPage extends Component {

  render() {
    const { match, cats } = this.props;

  return (
    <div>
      <p></p>
      <Switch>
        <Route path={`${match.url}/:catId`} component={CatsShow}/>
        <Route exact path={match.url} render={() => (
          <h3>Please select a cat from the list for more info.</h3>
        )}/>
      </Switch>
      <CatsList cats={cats} />
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
