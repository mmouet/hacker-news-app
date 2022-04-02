import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Search: </label>
                <input 
                    type="text"
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchBar;