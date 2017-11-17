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

export function removeCat(id) {
	return {
		type: 'REMOVE_CAT',
		id
	}
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


export function locationHasErrored(bool) {
    return {
        type: 'LOCATION_HAS_ERRORED',
        hasErrored: bool
    };
}

export function locationIsLoading(bool) {
    return {
        type: 'LOCATION_IS_LOADING',
        isLoading: bool
    };
}

export function locationFetchDataSuccess(locations) {
    return {
        type: 'LOCATION_FETCH_DATA_SUCCESS',
        locations
    };
}

export function removeLocation(id) {
	return {
		type: 'REMOVE_LOCATION',
		id
	}
}

export function addLocation(location) {
	return {
		type: 'ADD_LOCATION',
		location
	}
}


export function locationFetch(url) {
  return (dispatch) => {
    return fetch('/api/locations', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
   })
      .then(response => response.json())
      .then(locations => {
          console.log(locations)
          dispatch(locationFetchDataSuccess(locations));
      })
      .catch( () => dispatch(locationHasErrored(true)));
  }
}
