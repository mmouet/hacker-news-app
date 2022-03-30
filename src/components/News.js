import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';
import Article from './Article';

class News extends React.Component {
    componentDidMount() {
        this.props.fetchNews();
    }
    
    renderNews() {
        // Object keys
        // .author, .content, .description, .publishedAt, .title, .url, .urlToImage, .source.id, .source.name

        console.log(this.props.news)
        return (
            <div>
                {this.props.news[0]}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderNews()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { news: state.news }
}

export default connect(mapStateToProps, { fetchNews })(News);