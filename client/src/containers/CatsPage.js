import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CatsNew from './CatsNew';
import CatsShow from './CatsShow';
import CatsList from '../components/CatsList';

class CatsPage extends Component {

  render() {

    const { match } = this.props;

    return (
      <div>
        <CatsList cats={this.props.cats} />
        <Switch>
         <Route path={`${match.url}/new`} component={CatsNew} />
          <Route path={`${match.url}/:catId`} component={CatsShow}/>
          <Route exact path={match.url} render={() => (
            <h3>Please select some criteria to filter cats.</h3>
          )}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatsPage);
