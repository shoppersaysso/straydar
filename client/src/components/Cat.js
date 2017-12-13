import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addLike } from '../actions/catActions'

class Cat extends Component {

  handleOnLike = () => {
    this.props.addLike(this.props.cat.id, this.props.cat.likes + 1)
  }

  callApi = () => {
    console.log('a')
    fetch('/api/cats')
    .then(response => {
      console.log('c')
      return response.json()})
    .then(cats => {
        console.log('d', cats)
    })
    console.log('b')
  }

  render(){
    const cat = this.props.cat;
    console.log(this.props)
    return (
      <div key={cat.id}>
        <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={4}>
          <Link to={`/cats/${cat.id}`}><h2>Have you seen me?</h2></Link>
          <br></br>
          <p><img src={cat.photo} width="300" height="200" alt='not found'/></p>
        </Grid.Column>
        <Grid.Column width={5}>
          <h2>Cat Description:</h2>
          <p>Color: {cat.color}</p>
          <p>Age: {cat.age}</p>
          <p>Details: {cat.details}</p>
          <p><button
            onClick={this.handleOnLike}>
            Like
          </button>{cat.likes}</p>
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

export default connect(null, { addLike })(Cat);
