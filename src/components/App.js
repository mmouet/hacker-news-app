import React from 'react';
import SearchBar from './SearchBar';
import NewsResults from './NewsResults';
import useSearch from '../hooks/useSearch';

const App = () => {
    const [results, searchResults] = useSearch('buildings')

    return (
        <div> 
            <SearchBar onFormSubmit={searchResults} />
            <NewsResults results={results} />
        </div>
    )
}

export default App;