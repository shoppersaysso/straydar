import React from 'react';
import { connect } from 'react-redux';

const CatsShow = ({ cat }) =>
      <div className="col-md-8">
        <h2>Have you seen me?</h2>
        <p>Color: {cat.color}</p>
        <p>Age: {cat.age}</p>
        <p>Details: {cat.details}</p>
        <p><img src={cat.photo_url} alt="not found"/></p>
        <h2>Map:</h2>
          <iframe title={cat.id} width="500" height="300" frameBorder="0" styles="border:0"
           src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyB87EmTF2pCpIhrchHozxrDYM-Vcj8aZoc&q=" + cat.address}
           allowFullScreen>
          </iframe>
      </div>


const mapStateToProps = (state, ownProps) => {
  const cat = state.cats.find(cat => cat.id === +ownProps.match.params.catId)

  if (cat) {
    return { cat }
  } else {
    return { cat: {} }
  }
};

export default connect(mapStateToProps)(CatsShow);
