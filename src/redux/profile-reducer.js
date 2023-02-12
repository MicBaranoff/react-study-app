import {profileApi} from "../Api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.value
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.value
            };
        default:
            return state;
    }
}
export const SetUserProfile = (value) => {
    return {
        type: SET_USER_PROFILE,
        value,
    }
}

export const SetUserStatus = (value) => {
    return {
        type: SET_USER_STATUS,
        value,
    }
}

export const getProfile = (profileID) => (dispatch) => {
    profileApi.getProfile(profileID).then((res) => {
        dispatch(SetUserProfile(res.data));
    })
}

export const getUserStatus = (profileID) => (dispatch) => {
    profileApi.getStatus(profileID).then((res) => {
        dispatch(SetUserStatus(res.data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status).then(() => {
        dispatch(SetUserStatus(status));
    })
}

export default profileReducer;