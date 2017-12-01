import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
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
      uploadedFileCloudinaryUrl: ''
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

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
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
          uploadedFileCloudinaryUrl: response.body.secure_url
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
            <form onSubmit={this.handleOnSubmit} >
            <p>Color: <input
                type="text"
                placeholder="Color"
                name="color"
                onChange={this.handleOnChange} /></p>
            <p>Age:   <select value={this.state.value} onChange={this.handleOnChange} name="age">
                <option value="select"></option>
                <option value="adult">Adult</option>
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
            <div className="Drop-Zone">
            <Dropzone
               multiple={false}
               accept="image/*"
               onDrop={this.onImageDrop.bind(this)}>
               <p>(Optional) Drop an image or click to select a file to upload.</p>
             </Dropzone>
           </div>
           <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} alt="none"/>
              </div>}
            </div>
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
