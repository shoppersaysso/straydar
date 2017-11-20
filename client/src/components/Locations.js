import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';



const Locations = (props) => {

  function listLocations() {
    return props.cats.addresses.map(location => {
      return (<div key={location.id}>


      </div>
    )
  })
}

  return (
    <Segment>
      <h1>Locations</h1>
      {listLocations()}
    </Segment>
  );
};


  const mapStateToProps = state => {
    return {
      locations: state.cats.adresses,

    };
  }

export default connect(mapStateToProps)(Locations);
