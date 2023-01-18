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
        return Axios.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        })
    }
}