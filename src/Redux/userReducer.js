import { userConstants } from '../constants/userConstants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user;

export function userProfileReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.REQUEST_USER_DATA:
            return {
                ...state,
            };
        case userConstants.REQUEST_USER_DATA_SUCCESS:
            return {
                data : action.userData,
                isDataLoaded : true
            }
        default:
            return state;
    }
}