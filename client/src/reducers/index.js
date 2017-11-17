import { combineReducers } from 'redux';
import { cats, catsHasErrored, catsIsLoading } from './manageCats';
import { locations, locationHasErrored, locationIsLoading } from './manageLocations';

export default combineReducers({
    cats,
    catsHasErrored,
    catsIsLoading,
    locations,
    locationHasErrored,
    locationIsLoading
});
