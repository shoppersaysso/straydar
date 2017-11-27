import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';


class Locations extends Component {

  render() {

  return (
    <div>
      <p></p>

      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    addresses: state.cats.addresses
  };
}

export default connect(mapStateToProps)(Locations);
