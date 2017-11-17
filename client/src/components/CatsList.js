import React from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import listLocations from './Locations'


const CatsList = (props) => {

  function listCats() {
    return props.cats.map(cat => {
      return (
        <div key={cat.id}>
          <Grid>
            <Grid.Column width={5}>
              <p><img src={cat.photo_url}/></p>
            </Grid.Column>
            <Grid.Column width={6}>
              <h2>Cat Details</h2>
              <p>Color: {cat.color}</p>
              <p>Age: {cat.age}</p>
              <p>Details: {cat.details}</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <h2>Locations:</h2>


            </Grid.Column>
          </Grid>
        </div>
      )
    })
  }

  return (
    <Segment>
    {listCats()}


    </Segment>
  )
}


  const mapStateToProps = state => {
    return {
      cats: state.cats
    };
  }

export default connect(mapStateToProps)(CatsList);
