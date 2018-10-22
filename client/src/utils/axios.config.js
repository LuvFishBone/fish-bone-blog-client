import axios from 'axios'
import Vue from 'vue'


axios.interceptors.request.use( config => {
    return config;
}, err => {
    return Promise.reject(err);
})

axios.interceptors.response.use(data => {
    return data;
}, err => {
    return Promise.reject(err);
})
