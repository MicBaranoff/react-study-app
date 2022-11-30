const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            name: 'Svetka Komarova',
            followed: false,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
            id: 2,
            name: 'Dima Petrov',
            followed: true,
            avatar: 'https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg'
        },
        {
            id: 3,
            name: 'Vova Andrianov',
            followed: true,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
            id: 4,
            name: 'Danya Lianka',
            followed: false,
            avatar: 'https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg'
        }
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.value) {
                        return {...user, followed: true}
                    } else {
                        return {...user}
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.value) {
                        return {...user, followed: false}
                    } else {
                        return {...user}
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        default:
            return state;
    }
};


export const followUserActionCreator = (userID) => {
    return {
        type: FOLLOW,
        value: userID,
    }
}
export const unfollowUserActionCreator = (userID) => {
    return {
        type: UNFOLLOW,
        value: userID,
    }
}

export const setUsersActionCreator = (users) => {
    return {type: SET_USERS, value: users}
}

export default usersReducer;