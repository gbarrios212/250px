import React from 'react';
import { Link } from 'react-router-dom';

class ManageLibraryDetail extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="photo-icon-container">
                <Link to={`/photos/${this.props.photo.id}`} className="external-link-container">
                    <i class="fas fa-external-link-alt"></i>
                </Link>
                <img src={this.props.photo.photoUrl} alt=""> 
                </img>
            </div>
        )
    }
    
}

export default ManageLibraryDetail;