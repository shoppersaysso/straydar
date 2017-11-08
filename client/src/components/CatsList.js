import React from 'react';
import { Link } from 'react-router-dom';

const CatsList = ({ cats }) => {
  const renderCats = cats.map(cat =>
    <Link key={cat.id} to={`/cats/${cat.id}`}>{cat.color} {cat.age} {cat.details}</Link>
  );

  return (
    <div>
      {renderCats}
    </div>
  );
};

export default CatsList;
