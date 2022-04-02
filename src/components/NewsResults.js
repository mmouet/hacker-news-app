import React from 'react';

const NewsResults = ({ results }) => {
    console.log(results)
    
    const renderNews = results.map((result) => {
        return (
            <div>
                {result[0].title}
            </div>
        )
    })
    return <div>{renderNews}</div>
};

export default NewsResults;