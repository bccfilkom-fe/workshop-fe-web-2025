import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://bccapi.ahmad-faiz.my.id/api/web',
})