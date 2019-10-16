import React from 'react';
import ProfilePhotosContainer from './profile_photos_container';
import UserInfo from './user_info';
import CoverPhoto from './cover_photo';
import { Link } from 'react-router-dom';
import FollowsContainer from '../follows/follows_container';

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchAllUsers();
        this.props.fetchUser(this.props.match.params.userId);
        // this.props.fetchAllUsers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId){
          this.props.fetchUser(this.props.match.params.userId);
          this.props.fetchAllUsers();
          this.props.fetchPhotos();
        }
      }

    render() {

        let follow;

        follow = this.props.currentUser && this.props.currentUser.id !== this.props.match.params.userId ? 
            <FollowsContainer /> : <div>Neat!</div>;

        return(
            <>
            <div className="profile-header">
                <div className="cover-photo-container">
                    <img className="cover-photo" alt=""/>
                </div>
                <div className="avatar-container">
                    <div className="user-avatar">
                        <div className="user-avatar-container">
                            <img className="avatar" src={this.props.profileUser.profilePictureUrl} alt=""/>
                            {/* <i className="fas fa-user-circle profile-avatar"></i> */}
                        </div>
                    </div>
                </div>
                <div className="profile-buttons">
                    <div className="buttons-wrapper">
                        <Link to="/settings">
                            <button className="more-button"></button>
                        </Link>
                    </div>
                </div>
                <div className="user-details">
                    <h1>
                        {/* {this.props.profileUser.username} */}
                        {this.props.profileUser.username}
                    </h1>
                    <ul className="stat-details">
                        <li className="details-list-photo">
                            {this.props.profileUser.photo_ids.length}
                        </li>
                        <li className="details-list-followers">
                            FOLLOWERS HERE 
                        </li>
                        <li className="details-list-following">
                            FOLLOWING HERE
                        </li>
                        <li>
                            {follow}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tabs-container">
                <ul className="tabs">
                <li>
                    <Link to={`/users/${this.props.profileUser.id}`}>PHOTOS</Link>
                </li>
                    
                    <li>ABOUT</li>
                </ul>
            </div>
                <ProfilePhotosContainer photos={this.props.photos} />
            </>
        )
    }
}

export default ProfilePage; 