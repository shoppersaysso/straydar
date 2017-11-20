import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import { addCat } from '../actions/catActions';


class CatsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      age: '',
      details: '',
      photo: '',
      address: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const addCat = this.props;
    addCat(this.state);
    window.history.push(`/cats`)
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
            <p>Age:   <select value={this.state.value} onChange={this.handleOnChange} name="age">
                <option defaultValue="adult">Adult</option>
                <option value="kitten">Kitten</option>
                </select></p>
            <p>Details: <input
                type="text"
                placeholder="spots, stripes, etc."
                name="details"
                onChange={this.handleOnChange} /></p>
            <p>Closest Address :</p>
            <p><textarea rows="4" cols="50"
                name="address"
                placeholder="(include street number, street name, city, and state)"
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

export default connect(null, { addCat })(CatsNew);
