import {authApi} from "../Api/api";

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
                isAuth: true,
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userID, email, login) => {
    return {type: SET_USER_DATA, value: {userID, email, login}}
}

export const getAuthStatus = () => (dispatch) => {
    authApi.getAuthStatus().then((res) => {
        if (res.data.resultCode === 0) {
            let { id, login, email } = res.data.data;
            dispatch(setAuthUserData(id, login, email));
        }
    })
}

export default authReducer;