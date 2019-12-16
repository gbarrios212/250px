import React from "react";
import { Link } from "react-router-dom"

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            autoCompleteResults: [],
            userselected: {},
            showuserselected: false
        };

        // $.getJSON('/search?q=' + this.state.term)
        //     .then(response => this.setState({ autoCompleteResults: response.users }))
    }

    getAutoCompleteResults(e) {
        this.setState({
            term: e.target.value
        }, () => {
            $.getJSON('/search?q=' + this.state.term)
                .then(response => this.setState({ autoCompleteResults: response.users }))
        });
    }

    render() {
        let autoCompleteList;
        if (this.state.autoCompleteResults) {


            autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
                return <div key={index} className="search-index">
                    <Link to={`/users/${response.id}`}>
                        <h2>{response.username}</h2>
                    </Link>
                    </div>
        });
    }
        return (
            <div>
                <input className="search"
                    ref={(input) => { this.searchBar = input }} 
                    value={this.state.term} 
                    onChange={this.getAutoCompleteResults.bind(this)} 
                    type='text' 
                    placeholder='Search...' />
                    { autoCompleteList }
            </div>
        )
    }
}

export default Search;