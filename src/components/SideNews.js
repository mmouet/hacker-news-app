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
                category: 'science'
            }
        });
        setSideResults(response.data.articles)
    };

    const renderNews = sideResults.map((result) => {
        return (
            <div key={result.source.id} className="ui card">
                <div>
                    <h2>{result.title}</h2>
                    <h5>by {result.author} - {result.source.name} - {result.publishedAt}</h5>
                </div>

                <div>
                    <div className="ui image large">
                        <a href={result.url}>
                            <img src={result.urlToImage} />
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