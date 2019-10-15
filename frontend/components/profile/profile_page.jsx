import React from 'react';
import ProfilePhotosContainer from './profile_photos_container';
import UserInfo from './user_info';
import CoverPhoto from './cover_photo';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        return(
            <>
            <div className="profile-header">
                <div className="cover-photo-container">
                    <img className="cover-photo" alt=""/>
                </div>
                <div className="avatar-container">
                    <div className="user-avatar">
                        <div className="user-avatar-container">

                            <i className="fas fa-user-circle profile-avatar"></i>
                        </div>
                    </div>
                </div>
                <div className="profile-buttons">
                    <div className="buttons-wrapper">
                        <button className="more-button"></button>
                    </div>
                </div>
                <div className="user-details">
                    <h1>
                        {this.props.currentUser.username}
                    </h1>
                    <ul className="stat-details">
                        <li className="details-list-photo">
                            {this.props.currentUser.photo_ids.length}
                        </li>
                        <li className="details-list-followers">
                            FOLLOWERS HERE 
                        </li>
                        <li className="details-list-following">
                            FOLLOWING HERE
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tabs-container">
                <ul className="tabs">
                <li>
                    <Link to={`/users/${this.props.currentUser.id}`}>PHOTOS</Link>
                </li>
                    
                    <li>ABOUT</li>
                </ul>
            </div>
                {/* <div>Hi, welcome to the profile page!</div> */}
                {/* <CoverPhoto />
                <UserInfo /> */} 
                <ProfilePhotosContainer />
            </>
        )
    }
}

export default ProfilePage; 