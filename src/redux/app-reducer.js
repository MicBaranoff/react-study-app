import {getAuthStatus} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: action.value,
            }
        default:
            return state;
    }
};

export const initializeSuccess = (value) => {
    return {type: INITIALIZED_SUCCESS, value}
}

export const initializeApp = () => (dispatch) => {
    const authPromise = dispatch(getAuthStatus());
    Promise.all([authPromise]).then(() => {
        dispatch(initializeSuccess(true));
    })
}

export default appReducer;