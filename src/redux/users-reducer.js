const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followInProgress: [],
//    users: [
//        {
//            id: 1,
//            name: 'Svetka Komarova',
//            followed: false,
//            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
//        },
//        {
//            id: 2,
//            name: 'Dima Petrov',
//            followed: true,
//            avatar: 'https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg'
//        },
//        {
//            id: 3,
//            name: 'Vova Andrianov',
//            followed: true,
//            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
//        },
//        {
//            id: 4,
//            name: 'Danya Lianka',
//            followed: false,
//            avatar: 'https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg'
//        }
//    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.value ? {...user, followed: true} :  {...user}
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.value ? {...user, followed: false} :  {...user}
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.value,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.value,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.value,
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.value,
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            console.log({
                ...state,
                followInProgress: [...state.followInProgress, action.userID],
            })
            return {
                ...state,
                followInProgress: action.actionType ?
                    [...state.followInProgress, action.userID] :
                    [state.followInProgress].splice([state.followInProgress].indexOf(action.userID), 1),
            }
        default:
            return state;
    }
};


export const followUser = (userID) => {
    return {
        type: FOLLOW,
        value: userID,
    }
}
export const unfollowUser = (userID) => {
    return {
        type: UNFOLLOW,
        value: userID,
    }
}
export const setUsers = (users) => {
    return {type: SET_USERS, value: users}
}
export const setCurrentPage = (value) => {
    return {type: SET_CURRENT_PAGE, value}
}
export const setTotalUsersCount = (value) => {
    return {type: SET_TOTAL_USERS_COUNT, value}
}
export const toggleLoading = (value) => {
    return {type: TOGGLE_LOADING, value}
}
export const toggleFollowingProgress = (userID, actionType) => {
    return {type: TOGGLE_FOLLOWING_PROGRESS, userID, actionType}
}

export default usersReducer;