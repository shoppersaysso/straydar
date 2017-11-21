import fetch from 'isomorphic-fetch'

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

export function addCat(cat) {
	return {
		type: 'ADD_CAT',
		cat
	}
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
