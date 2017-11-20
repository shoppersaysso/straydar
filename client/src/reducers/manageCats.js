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
      return [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ]

    case 'REMOVE_CAT':
      let idx = state.cats.indexOf(action.id)
      return Object.assign(state, {
        cats: [
          state.cats.slice(0, idx),
          state.cats.slice(idx + 1),
        ]
      });

    default:
      return state;
  }
}
