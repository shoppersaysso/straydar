import React from 'react';
import { connect } from 'react-redux';

const CatsList = (props) => {

  function listCats() {
    return props.cats.map(cat => {
      return (
          <div key={cat.id}>
            <p>Color: {cat.color}</p>
            <p>Age: {cat.age}</p>
            <p>Details: {cat.details}</p>
            <p>Photo:</p>
            <p><img src={cat.photo} className="thumbnail responsive" alt="presentation"/></p>
            <p>Locations:</p>
        </div>
      )
    })
  }


  return (
    <div>
    {listCats()}
    </div>
  )
  }


  const mapStateToProps = state => {
    return {
      cats: state.cats
    };
  }

export default connect(mapStateToProps)(CatsList);
