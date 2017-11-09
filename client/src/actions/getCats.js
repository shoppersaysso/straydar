import fetch from 'isomorphic-fetch'

export function getCats() {

  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:3000/api/cats', {'mode': 'no-cors'})
    .then(response => response.json())
    .then(responseData => {
      dispatch({type: 'GET_CATS', payload: responseData })
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });
  }
}
