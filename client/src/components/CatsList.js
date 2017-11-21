import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';


const CatsList = ({ cats }) => {
  const listCats = cats.map(cat =>
    <li>  <Link key={cat.id} to={`/cats/${cat.id}`}>{cat.color} cat found at {cat.address}</Link></li>

  );

  return (
    <Segment>
      <ol>
        {listCats}
      </ol>
    </Segment>
  )
}


export default CatsList;
