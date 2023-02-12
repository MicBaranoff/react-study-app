import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY' : '9e15d9c3-a523-4e71-aeb6-013ec591e7b9'
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return Axios.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    setFollowStatus(requestType, userID) {
        return Axios[requestType](`follow/${userID}`)
    }
}

export const profileApi = {
   getProfile(id = 1) {
        return Axios.get(`profile/${id}`)
    },
    getStatus(id) {
        return Axios.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return Axios.put(`profile/status`, {status})
    }
}

export const authApi = {
    getAuthStatus() {
        return Axios.get(`auth/me`)
    }
}