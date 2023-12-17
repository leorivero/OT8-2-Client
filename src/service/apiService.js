
const axios = require('axios');

const baseURL = 'http://localhost:8080/';

const apiService = axios.create({
    baseURL,
});


const fetchData = async (endpoint) => {
    try {
        const response = await apiService.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        throw error;
    }
};

const postData = async (endpoint, data) => {
    try {
        const response = await apiService.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        throw error;
    }
};


module.exports = { fetchData, postData };

