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
                    <img className="cover-photo" src="" alt=""/>
                </div>
                <div className="avatar-container">
                    
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