import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePhotosDetail extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <Link className="profile-show-page-button" to={`/photos/${this.props.photo.id}`}>
                <img src={this.props.photo.photoUrl} alt=""></img>
            </Link>
        )
    }
}

export default ProfilePhotosDetail;