import React from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Cat from '../components/Cat';

const CatsShow = ({ cat }) =>
  <div>
    <Cat key={cat.id} cat={cat}/>
    <h3><Link to={`/cats`}>Back</Link></h3>
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
