import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL:'https://burger-builder-83d3a.firebaseio.com/'
});

export default AxiosInstance;