import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getCats } from '../actions/getCats';
import CatsNew from './CatsNew';
import CatsShow from './CatsShow';
import CatsList from '../components/CatsList';

class CatsPage extends Component {

  componentDidMount() {
    this.props.getCats();
  }

  render() {
    const { match, cats } = this.props;

    return (
      <div>
        <CatsList cats={cats} />
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

export default connect(mapStateToProps, { getCats })(CatsPage);
