import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import listingReducer from './listingReducer';

export default combineReducers({
  routing: routerReducer,
  listingReducer,
});