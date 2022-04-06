import React from 'react';
import SearchBar from './SearchBar';
import NewsResults from './NewsResults';
import useSearch from '../hooks/useSearch';
import SideNews from './SideNews';

const App = () => {
    const [results, searchResults] = useSearch('buildings')

    return (
        <div className="container"> 
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <h1 className="display-4 text-start text-decoration-underline" >Hacker News App - Module 5</h1>
                    </div>
                    <div className="col-sm-3">
                        <br></br>
                        <SearchBar onFormSubmit={searchResults} />
                    </div>
                </div> 
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-8">
                    <NewsResults results={results} />
                </div>
                <div className="col-sm-4">
                    <h2 className="display-6 text-center text-decoration-underline">Other Popular News</h2>
                    <SideNews />
                </div>
            </div>
        </div>
    )
}

export default App;