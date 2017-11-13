import { combineReducers } from 'redux';
import { cats, catsHasErrored, catsIsLoading } from './manageCats';

export default combineReducers({
    cats,
    catsHasErrored,
    catsIsLoading
});
