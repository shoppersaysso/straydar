import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CatsNew from './CatsNew';
import CatsShow from './CatsShow';

class CatsPage extends Component {


  render() {
    const { match } = this.props;

    return (
      <div>
        <Switch>
          <Route path={`${match.url}/new`} component={CatsNew} />
          <Route path={`${match.url}/:catId`} component={CatsShow}/>
          <Route exact path={match.url} render={() => (
            <h3>Please select a Cat from the list.</h3>
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
