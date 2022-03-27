import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';

class News extends React.Component {
    componentDidMount() {
        this.props.fetchNews();
    }


    renderNews() {
    }

    render() {
        return (
            <div>{this.renderNews()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { news: state.news }
}

export default connect(mapStateToProps, { fetchNews })(News);