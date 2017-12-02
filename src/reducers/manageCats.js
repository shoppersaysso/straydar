export function catsHasErrored(state = false, action) {
  switch (action.type) {
    case 'CATS_HAS_ERRORED':
    return action.hasErrored;

    default:
      return state;
  }
}

export function catsIsLoading(state = false, action) {
  switch (action.type) {
    case 'CATS_IS_LOADING':
    return action.isLoading;

    default:
      return state;
  }
}

export function cats(state = [], action) {

  switch (action.type) {

    case 'CATS_FETCH_DATA_SUCCESS':
      return action.cats;

    case 'ADD_CAT':
      const cat = Object.assign({}, action.cat, { id: state.length + 1} );
      return [ ...state, cat ];
    default:
      return state;
  }
}
