import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

class Cat extends Component {
  render(){
    const cat = this.props.cat;
    return (
      <div key={cat.id}>
        <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={4}>
          <Link to={`/cats/${cat.id}`}><h2>Have you seen me?</h2></Link>
          <br></br>
          <p><img src={cat.photo} alt="not found"/></p>
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
      </div>

    )
  }
}

export default Cat;
