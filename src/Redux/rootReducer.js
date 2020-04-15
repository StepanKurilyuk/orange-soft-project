import { combineReducers } from 'redux';
import {authentication} from './userReducer';

export const rootReducer = combineReducers({
    authentication
});