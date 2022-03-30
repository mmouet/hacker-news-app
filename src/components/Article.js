import React from 'react';

const Article = ({ author, content, description, publishedAt, title, url, urlToImage, id, name }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
            </div>
        </div> 
    )
}

export default Article;