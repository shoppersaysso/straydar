import fetch from 'isomorphic-fetch'

export function getCats() {
  return (dispatch) => {
    dispatch({ type: 'GET_CATS' });
    return fetch('/api/v1/cats')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'GET_CATS', cats }));
  };
}

export function addCat(cat){
  return {
    type: 'ADD_CAT',
  };
};
