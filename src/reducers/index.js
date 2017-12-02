import { combineReducers } from 'redux';
import { catsHasErrored, catsIsLoading, cats } from './manageCats';

export default combineReducers({
    catsHasErrored,
    catsIsLoading,
    cats
});
