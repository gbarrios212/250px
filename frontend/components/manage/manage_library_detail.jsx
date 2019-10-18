import React from 'react';
import { Link } from 'react-router-dom';

class ManageLibraryDetail extends React.Component{
    constructor(props) {
        super(props)

        // //debugger;
        // this.state={ selected: false };
        // this.toggleSelect = this.toggleSelect.bind(this);
    }

    render(){
        // //debugger;
        return(
            <div className="photo-icon-container">
                <Link to={`/photos/${this.props.photo.id}`}>
                    <i class="fas fa-external-link-alt"></i>
                </Link>
                {/* <i class="fas fa-search-plus"></i> */}
                <img src={this.props.photo.photoUrl} alt=""> 
                </img>
            </div>
        )
    }
    
}

export default ManageLibraryDetail;