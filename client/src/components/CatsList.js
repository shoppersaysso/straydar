import React from 'react';

const CatsList = (props) => {

  function listCats() {
    return props.cats.map(cat => {
      return (
        <ul>
          <li key={cat.id}>
            <p>Color: {cat.color}</p>
            <p>Age: {cat.age}</p>
            <p>Details: {cat.details}</p>
            <p>Photo: <img src={cat.photo} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/></p>
          </li>
        </ul>
      )
    })
  }


  return (
    <div>
    {listCats()}
    </div>
  )
  }

export default CatsList;
