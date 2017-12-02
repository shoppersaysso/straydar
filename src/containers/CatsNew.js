import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import request from 'superagent';
import { addCat } from '../actions/catActions';

const CLOUDINARY_UPLOAD_PRESET = 'g4m3zs3d';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/straydar/upload';

class CatsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      age: '',
      details: '',
      photo: '',
      address: '',
      photoUrl: ''
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

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          photoUrl: response.body.secure_url
        });
      }
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
             <br></br>
             <p>Upload image (optional):</p>
             <p><input
                 type="file"
                 name="photoUrl"
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
