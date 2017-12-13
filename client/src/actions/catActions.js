import fetch from 'isomorphic-fetch';

export function catsHasErrored(bool) {
    return {
        type: 'CATS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function catsIsLoading(bool) {
    return {
        type: 'CATS_IS_LOADING',
        isLoading: bool
    };
}

export function catsFetchDataSuccess(cats) {
    return {
        type: 'CATS_FETCH_DATA_SUCCESS',
        cats
    };
}

export function catsPostNewSuccess(cat) {
    return {
        type: 'CATS_POST_NEW_SUCCESS',
        cat
    };
}

export function catsFetch(url) {
  return (dispatch) => {
    return fetch('/api/cats', {
      method: 'GET',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
    })
      .then(response => response.json())
      .then(cats => {
          console.log(cats)
          dispatch(catsFetchDataSuccess(cats));
      })
      .catch( () => dispatch(catsHasErrored(true)));
  }
}

export function addCat(values) {
    return (dispatch) => {
      //dispatch({type: 'CREATE_NEW_CAT'});
      return fetch(`/api/cats`, {
        method: 'POST',
        body: JSON.stringify({cat: values}),
        headers: {
          'Content-Type': 'application/json'
        },
    },
    )
    .then(response => response.json())
    .then(cat => {
      console.log(cat)
      dispatch({type: 'ADD_CAT', cat});
  })
    .catch( () => dispatch(catsHasErrored(true)));
  }
}

export function addLike(id, values) {
  console.log(id, values);
  return (dispatch) => {
    return fetch(`/api/cats/${id}.json`, {
      method: 'PUT',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body: JSON.stringify({cat: {likes: values}}),
    })
    .then(response => response.json())
    .then(cat => {
      dispatch({type: 'ADD_LIKE', cat});
    })
    .catch( () => dispatch(catsHasErrored(true)));
  }
}
