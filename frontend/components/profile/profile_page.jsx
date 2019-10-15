import React from 'react';
import ProfilePhotosContainer from './profile_photos_container';
import UserInfo from './user_info';
import CoverPhoto from './cover_photo';

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