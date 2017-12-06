import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import {}

class Cat extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  //property initializer
  handleOnLike = () => {
    console.log(this)
    this.setState({likes: this.state.likes + 1})
  }

  callApi = () => {
    console.log('a')
    fetch('/api/cats', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('b')
      return response.json()})
    .then(cats => {
        console.log('c', cats)
    })
    console.log('d')
  }

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
          <p><img src={cat.photo} width="300" height="200" alt={'/images/missing.png'}/></p>
        </Grid.Column>
        <Grid.Column width={5}>
          <h2>Cat Description:</h2>
          <p>Color: {cat.color}</p>
          <p>Age: {cat.age}</p>
          <p>Details: {cat.details}</p>
          <p><button
            onClick={this.handleOnLike}>
            Like
          </button>{this.state.likes}</p>
          <p><button
            onClick={this.callApi}>
              Call Api
          </button></p>
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
