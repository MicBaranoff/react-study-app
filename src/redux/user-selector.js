export const getUsers = (state) => {
    return state.usersReducer.users
}

export const getPageSize = (state) => {
    return state.usersReducer.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}

export const getIsLoading = (state) => {
    return state.usersReducer.isLoading
}

export const getFollowInProgress = (state) => {
    return state.usersReducer.followInProgress
}