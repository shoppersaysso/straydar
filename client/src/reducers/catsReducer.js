export default function catsReducer(state= [], action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return Object.assign({}, state)
    case 'GET_CATS':
      return {cats: action.payload};
    case 'ADD_CAT':
      const cat = Object.assign({}, action.cat, { id: state.length + 1} );
      return [ ...state, cat ];
    default:
      return state;
  }

}
