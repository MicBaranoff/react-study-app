import {authApi} from "../Api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.value,
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userID, email, login, isAuth) => {
    return {type: SET_USER_DATA, value: {userID, email, login, isAuth}}
}

export const getAuthStatus = () => (dispatch) => {
   return authApi.getAuthStatus().then((res) => {
        if (res.data.resultCode === 0) {
            let { id, login, email } = res.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    })
}

export const loginToProfile = (data) => (dispatch) => {
    authApi.loginToProfile(data).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(getAuthStatus());
        } else {
            let action = () => stopSubmit('login', {
                _error: res.data.messages[0]
            })
            dispatch(action());
            // alert(res.data.messages[0])
        }
    })
}

export const logoutProfile = () => (dispatch) => {
    authApi.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        } else {
            alert(res.data.messages[0])
        }
    })
}

export default authReducer;