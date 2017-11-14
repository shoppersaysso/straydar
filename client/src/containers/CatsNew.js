import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react'


class CatsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      age: '',
      details: '',
      photo: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addCat, history } = this.props
    addCat(this.state);
    history.push('/cats');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>Report a Stray Cat Sighting</h2>
            <form onSubmit={this.handleOnSubmit} >
            <p>Color: <input
                type="text"
                placeholder="Color"
                name="color"
                onChange={this.handleOnChange} /></p>
            <p>Age:   <input
                type="text"
                placeholder="Age"
                name="age"
                onChange={this.handleOnChange} /></p>
            <p>Details: <input
                type="text"
                placeholder="Details"
                name="details"
                onChange={this.handleOnChange} /></p>
            <p>Upload image (optional):</p>
            <p><input
                type="file"
                name="photo"
                onChange={this.handleOnChange} /></p>
              <input
                type="submit"
                value="Report Stray" />
            </form>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
};

export default connect(null, null)(CatsNew);
