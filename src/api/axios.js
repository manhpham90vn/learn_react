import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.ezfrontend.com",
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error);
})

axiosInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
})

export default axiosInstance;