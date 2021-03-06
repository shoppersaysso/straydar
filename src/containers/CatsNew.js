import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { addCat } from '../actions/catActions';

const CLOUDINARY_UPLOAD_PRESET = 'g4m3zs3d';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/straydar/upload';
const CLOUDINARY_API =  '832657894521513';

class CatsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {
        color: '',
        age: '',
        details: '',
        address: '',
        photoUrl: '',
        photo: ''
      }
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

  handleDrop = files => {
  const uploaders = files.map(file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("api_key", CLOUDINARY_API);
    return axios.post(CLOUDINARY_UPLOAD_URL, formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url
      console.log(data);
      this.setState({
            photo: fileURL
          });
    })
  });

  axios.all(uploaders).then(() => {
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
                ref="color"
                onChange={this.handleOnChange} /></h3>
            <h3>Age:   <select value={this.state.value} onChange={this.handleOnChange} name="age" ref="age">
                <option value="select">---</option>
                <option value="adult">Adult</option>
                <option value="kitten">Kitten</option>
                </select></h3>
            <h3>Details: <input
                type="text"
                placeholder="spots, stripes, etc."
                name="details"
                ref="details"
                onChange={this.handleOnChange} /></h3>
            <h3>Closest Address :</h3>
            <p><textarea rows="4" cols="35"
                name="address"
                ref="address"
                placeholder="(include street number, street name, city, and state)"
                onChange={this.handleOnChange} /></p>
              <Dropzone
                name="photo"
                 onDrop={this.handleDrop}
                 multiple
                 accept="image/*" >
                 <p>Drop a photo or click here to upload:</p>
               </Dropzone>
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
            <img className="preview-image" src={this.state.photo} alt=""/>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
};

export default connect(null, { addCat })(CatsNew);
