import React, { useState, useEffect }from 'react';
import newsapi from '../apis/newsapi';

const SideNews = () => {
    const [sideResults, setSideResults] = useState([]);

    useEffect(() => {
        getSideResults();
    }, [])

    const getSideResults = async () => {
        const response = await newsapi.get('/top-headlines', {
            params: {
                category: 'technology'
            }
        });
        setSideResults(response.data.articles)
    };

    const renderNews = sideResults.map((result) => {
        return (
            <div key={result.source.id} className="container">
                <div>
                    <h2 className="text-center">{result.title}</h2>
                    <h6 className="text-center">by {result.author} - {result.source.name} - {result.publishedAt}</h6>
                </div>

                <div>
                    <div className="">
                        <a href={result.url} target="_blank" rel="noopener noreferrer">
                            <img src={result.urlToImage} className="img-fluid" />
                        </a>
                    </div>   
                </div>
                <div>
                    <p>{result.description}</p>
                </div>
            </div>
        )
    })
    return <div>{renderNews}</div>
};

export default SideNews;