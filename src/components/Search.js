import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions';

class Search extends React.Component {
    componentDidMount() {
        this.props.fetchSearch();
    }

    renderSearch() {
        console.log(this.props.search.data.articles)
        
        // This throws the error.
        // console.log(this.props.search.data.articles[0])

        return (
            <div>
            </div>
        )
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