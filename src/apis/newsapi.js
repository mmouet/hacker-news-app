import axios from 'axios';

// key: d55ac6e7938a4365b7bdc30666e8a826

export default axios.create({
    baseURL: 'https://newsapi.org/v2'
});