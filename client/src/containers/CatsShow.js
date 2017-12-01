import React from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CatsShow = ({ cat }) =>
    <Segment key={cat.id}>
        <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={4}>
          <h2>Have you seen me?</h2>
          <p><img src={cat.photo_url} alt="not found"/></p>
        </Grid.Column>
        <Grid.Column width={5}>
          <h2>Cat Description:</h2>
          <p>Color: {cat.color}</p>
          <p>Age: {cat.age}</p>
          <p>Details: {cat.details}</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <h2>Area Last Spotted:</h2>
              <iframe title={cat.id} width="500" height="300" frameBorder="0" styles="border:0"
               src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyB87EmTF2pCpIhrchHozxrDYM-Vcj8aZoc&q=" + cat.address}
               allowFullScreen>
              </iframe>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid>
        <h3><Link to={`/cats`}>Back</Link></h3>
        <br></br>
    </Segment>


const mapStateToProps = (state, ownProps) => {
  const cat = state.cats.find(cat => cat.id === +ownProps.match.params.catId)

  if (cat) {
    return { cat }
  } else {
    return { cat: {} }
  }
};

export default connect(mapStateToProps)(CatsShow);
