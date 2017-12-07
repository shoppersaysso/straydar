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
      address: '',
      photo: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addCat, history } = this.props;
    addCat(this.state);
    history.push(`/cats`)
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCancel = event => {
    this.props.history.push(`/cats`)
  }



  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>Report a Stray Cat Sighting</h2>
            <form className="form sortable-handler" onSubmit={this.handleOnSubmit} >
            <h3>Color: <input
                type="text"
                placeholder="Color"
                name="color"
                onChange={this.handleOnChange} /></h3>
            <h3>Age:   <select value={this.state.value} onChange={this.handleOnChange} name="age">
                <option value="select">---</option>
                <option value="adult">Adult</option>
                <option value="kitten">Kitten</option>
                </select></h3>
            <h3>Details: <input
                type="text"
                placeholder="spots, stripes, etc."
                name="details"
                onChange={this.handleOnChange} /></h3>
            <h3>Closest Address :</h3>
            <p><textarea rows="4" cols="35"
                name="address"
                placeholder="(include street number, street name, city, and state)"
                onChange={this.handleOnChange} /></p>
            <h3>Upload a photo (optional):</h3>
             <input
                type="file"
                name="photo"
                onChange={this.handleOnChange}/>
              <br></br>
              <br></br>
              <input
                type="submit"
                className="btn btn-primary"
                value="Report Stray" />
              <button
                onClick={this.handleCancel}
                className="btn btn-danger">
                Cancel
              </button>
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
