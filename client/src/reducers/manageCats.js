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

    default:
      return state;
  }
}