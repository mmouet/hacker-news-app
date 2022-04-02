import { useState, useEffect } from 'react';
import newsapi from '../apis/newsapi';

const useSearch = (defaultSearchTerm) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        searchResults(defaultSearchTerm);
    }, [defaultSearchTerm])

    const searchResults = async term => {
        const response = await newsapi.get('/everything', {
            params: {
                q: term
            }
        });
        setResults(response.data.articles)
    };
    return [results, searchResults]
};

export default useSearch;