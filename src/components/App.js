import React from 'react';
import SearchBar from './SearchBar';
import NewsResults from './NewsResults';
import useSearch from '../hooks/useSearch';
import SideNews from './SideNews';

const App = () => {
    const [results, searchResults] = useSearch('buildings')

    return (
        <div className="ui eight column grid"> 
            <div className="row">
                <div className="one wide column"></div>
                <div className="ten wide column">
                    <h1>Hacker News App - Module 5</h1>
                </div>
                <div className="three wide column">
                    <br></br>
                    <SearchBar onFormSubmit={searchResults} />
                </div>
            </div>

            <div className="row">
            <div className="one wide column"></div>
                <div className="ten wide column">
                    <NewsResults results={results} />
                </div>
                <div className="four wide column">
                    <SideNews />
                </div>
                <div className="one wide column"></div>
            </div>
        </div>
    )
}

export default App;