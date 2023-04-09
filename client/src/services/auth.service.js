import axios from 'axios';

const baseUrl = "http://localhost:3001"

const login = (payload) => {
    return axios.post(`${baseUrl}/authentication/login`, payload);
}

const register = (payload) => {
    return axios.post(`${baseUrl}/authentication/register`, payload);
}

export {
    login, register
}