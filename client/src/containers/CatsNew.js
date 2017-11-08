import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../actions/getCats';

class CatsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      age: '',
      details: '',
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
      <div>
        <h2>Add a Stray Cat Sighting</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Color"
            name="color"
            onChange={this.handleOnChange} />
          <input
            type="text"
            placeholder="Age"
            name="age"
            onChange={this.handleOnChange} />
          <input
            type="text"
            placeholder="Details"
            name="details"
            onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Add Stray" />
        </form>
      </div>
    );
  }
};

export default connect(null, { addCat })(CatsNew);
