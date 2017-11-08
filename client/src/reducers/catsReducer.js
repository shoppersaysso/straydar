export default function catsReducer(state= [], action) {
  switch (action.type) {
    case 'GET_CATS':
      return action.cats;
    case 'ADD_CAT':
      const cat = Object.assign({}, action.cat, { id: state.length + 1} );
      return [ ...state, cat ];
    default:
      return state;
  }

}
