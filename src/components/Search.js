import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions';

class Search extends React.Component {
    componentDidMount() {
        this.props.fetchSearch();
    }
        // author, content, description, publishedAt, title, url, urlToImage, source.id, source.name
    renderSearch() {      
        // console.log(this.props?.search?.data?.articles)
        // return this.props?.search?.data?.articles && this.props?.search?.data?.articles.map((article, index) => {
        //     return (
        //         <div>
        //             {article.title}
        //         </div>
        //     )
        // })
    }

    render() {
        return (
            <div>{this.renderSearch()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { search: state.search }
}

export default connect(mapStateToProps, { fetchSearch })(Search);