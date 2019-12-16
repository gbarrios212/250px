import React from "react";
import { Link } from "react-router-dom"

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            Users: [],
            Photos: [],
            userselected: {},
            showuserselected: false
        };
        
        this.clearSearch = this.clearSearch.bind(this);
    }

    getAutoCompleteResults(e) {
        this.setState({
            term: e.target.value
        }, () => {
            if (this.state.term.length > 0) {
                $.getJSON('/search?q=' + this.state.term)
                .then(response => this.setState({ Users: response.users, Photos: response.photos }))
            } else {
                this.clearSearch();
            }
        });
    }

    clearSearch() {
        this.setState({
            term: '',
            Users: [], 
            Photos: []
        })
    }

    render() {
        let usersList;
        if (this.state.Users) {
            usersList = this.state.Users.map((response, index) => {
                return <div key={index} className="search-index-user">
                    <Link to={`/users/${response.id}`}>
                        <h2>{response.username}</h2>
                    </Link>
                    </div>
        });
    } 

        let photoList; 
        if (this.state.Photos) {
            photoList = this.state.Photos.map((response, index) => {
                return <div key={index} className="search-index-photo">
                    <Link to={`/photos/${response.id}`}>
                        <h2>{response.name}</h2>
                    </Link>
                </div>
            })
        }
        return (
            <div>
                <div className="seach-modal" onClick={() => this.clearSearch}>
                    
                </div>
                <input className="search"
                    ref={(input) => { this.searchBar = input }} 
                    value={this.state.term} 
                    onChange={this.getAutoCompleteResults.bind(this)} 
                    type='text' 
                    placeholder='Search...' />
                    <div className="search-results">
                        <div className="search-results-users">
                            { usersList }
                        </div>
                        <div className="search-results-photos">
                            { photoList }
                        </div>
                    </div>
            </div>
        )
    }
}

export default Search;