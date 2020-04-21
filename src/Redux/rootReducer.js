import { combineReducers } from 'redux';
import { authentication } from './authReducer';
import { newsActions } from './newsReducer';
import { userProfileReducer } from './userReducer';

export const rootReducer = combineReducers({
    authentication,
    newsActions,
    userProfileReducer
});