const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.value
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

export default profileReducer;