import React from 'react';
import ProfilePhotos from './profile_photos';
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
            <div>Hi, welcome to the profile page!</div>
        )
    }
}

export default ProfilePage; 