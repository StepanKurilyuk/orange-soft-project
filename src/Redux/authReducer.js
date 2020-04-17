import { userConstants } from '../constants/userConstants';
import { toastConstants } from '../constants/toastConstants';
import { toast } from 'react-toastify';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                isUserLogged: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            toast.success(toastConstants.SUCCESS_LOGIN_TEXT, {
                position: toast.POSITION.TOP_RIGHT
            });

            return {  
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:

            toast.error(action.error, {
                position: toast.POSITION.TOP_RIGHT
            });

            return {};
        case userConstants.LOGOUT:
            toast.success(toastConstants.SUCCESS_LOGOUT_TEXT, {
                position: toast.POSITION.TOP_RIGHT
            });

            return {
                isUserLogged : false
            };
        default:
            return state;
    }
}