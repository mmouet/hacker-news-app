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
                <div className="">
                    <input 
                        type="text"
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;