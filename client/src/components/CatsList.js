import React from 'react';
import { Link } from 'react-router-dom';

const CatsList = ({cats}) => {
  function renderCats() {
    return cats.map(cat => {
      return (
        <div>
          <Link key={cat.id} to={`/cats/${cat.id}`}>{cat.color} {cat.age} {cat.details}</Link>
        </div>
      )
    })
  }

  return (
    <div>
      {renderCats()}
    </div>
  );
};

export default CatsList;
