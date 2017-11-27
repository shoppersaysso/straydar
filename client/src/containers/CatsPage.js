import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatsList from '../components/CatsList';

class CatsPage extends Component {

  render() {
    const { match, cats } = this.props;

  return (
    <div>
      <p></p>
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
