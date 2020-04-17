import { combineReducers } from 'redux';
import { authentication } from './authReducer';
import { newsActions } from './newsReducer';

export const rootReducer = combineReducers({
    authentication,
    newsActions
});