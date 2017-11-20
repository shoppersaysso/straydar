import React from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';


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
              <h2>Location Map:</h2>
                <iframe width="500" height="300" frameborder="0" styles="border:0"
                 src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyB87EmTF2pCpIhrchHozxrDYM-Vcj8aZoc&q=" + cat.address}
                 allowfullscreen>
                </iframe>
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
