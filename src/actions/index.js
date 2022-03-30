import newsapi from '../apis/newsapi';

export const fetchNews = () => async dispatch => {
    const response = await newsapi.get('/top-headlines?country=us&apiKey=d55ac6e7938a4365b7bdc30666e8a826')
    dispatch({ type: 'FETCH_NEWS', payload: response.data.articles })
};

export const fetchSearch = term => async dispatch => {
    const response = await newsapi.get(`/everything?q=${term}&apiKey=d55ac6e7938a4365b7bdc30666e8a826`)
    dispatch({ type: 'FETCH_SEARCH', payload: response })
};