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

    case 'CREATE_NEW_CAT':
      return state;

    case 'ADD_CAT':
      return [
        ...state,
        action.cat
      ];

    case 'ADD_LIKE':
      let index = state.findIndex(cat => cat.id === action.id);
      let cat = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, cat, { likes: cat.likes += 1 }),
        ...state.slice(index + 1)
      ];


    default:
      return state;
  }
}
