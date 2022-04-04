import React from 'react';

const NewsResults = ({ results }) => {
    const renderNews = results.map((result) => {
        return (
            <div key={result.title} className="large middle aligned" >
                <div style={{ textAlign: 'center' }}>
                    <h2>{result.title}</h2>
                    <h4>by {result.author} - {result.source.name} - {result.publishedAt}</h4>
                </div>
                
                <div>
                    <a href={result.url}>
                        <img src={result.urlToImage} className="ui centered large image"/>
                    </a>
                </div>   

                <div className="ui grid" style={{ textAlign: 'center' }}>
                    <div className="three wide column"></div>
                    <p className="ten wide column">{result.description} {result.content}</p>
                    <div className="two wide column"></div>
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