import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';


const CatsList = ({ cats }) => {

  function listCats() {
    return cats.map(cat => {
      return (
        <div key={cat.id}>
          <Grid>
          <Grid.Column width={1}>
          </Grid.Column>
            <Grid.Column width={4}>
              <p><img src={cat.photo_url} alt="not found"/></p>
            </Grid.Column>
            <Grid.Column width={5}>
              <h2>Cat Details</h2>
              <p>Color: {cat.color}</p>
              <p>Age: {cat.age}</p>
              <p>Details: {cat.details}</p>
            </Grid.Column>
            <Grid.Column width={4}>
              <h2>Location Map:</h2>
                <iframe title={cat.id} width="500" height="300" frameBorder="0" styles="border:0"
                 src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyB87EmTF2pCpIhrchHozxrDYM-Vcj8aZoc&q=" + cat.address}
                 allowFullScreen>
                </iframe>
            </Grid.Column>
            <Grid.Column width={1}>
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


export default CatsList;
