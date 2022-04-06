import React from 'react';

const NewsResults = ({ results }) => {
    const renderNews = results.map((result) => {
        return (
            <div key={result.title} className="container-sm" >
                <div>
                    <h2 className="text-center">{result.title}</h2>
                    <h6 className="text-center">by {result.author} - {result.source.name} - {result.publishedAt}</h6>
                </div>
                
                <div>
                    <a href={result.url} target="_blank" rel="noopener noreferrer">
                        <img src={result.urlToImage} className="img-fluid"/>
                    </a>
                </div>   

                <div>
                    <div></div>
                    <p>{result.description} {result.content}</p>
                    <div></div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            
        )
    })
    return <div>{renderNews}</div>
};

export default NewsResults;