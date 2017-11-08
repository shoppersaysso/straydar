import React from 'react';
import { connect } from 'react-redux';

const CatsShow = ({ cat }) =>
  <div className="col-md-8">
    <h2>{cat.color}</h2>
    <p>{cat.age}</p>
    <p>{cat.details}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const cat = state.cats.find(cat => cat.id === +ownProps.match.params.catId)

  if (cat) {
    return { cat }
  } else {
    return { cat: {} }
  }
};

export default connect(mapStateToProps)(CatsShow);
