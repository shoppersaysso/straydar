import fetch from 'isomorphic-fetch'

export function getCats() {
  return (dispatch) => {
    dispatch({ type: 'GET_CATS' });
    return fetch('http://localhost:3001/api/cats')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'ADD_CAT', cats }));
  };
}

export function addCat(cat){
  return {
    type: 'ADD_CAT',
  };
};
