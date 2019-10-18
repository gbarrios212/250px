import React from 'react';
import ProfilePhotosDetail from './profile_photos_detail';
import { Link } from 'react-router-dom';

class ProfilePhotos extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
       
        if (this.props.photos.length === 0){
            return (
                <div className="outer-new-upload-container">
                    <div className="new-upload-button">
                        <Link to="/manage/upload"> 
                            Upload a Photo
                        </Link>
                    </div>
                </div>
            );
        }

        if (!this.props.photos[0]){
            return <div>Loading</div>
        }

        let photosList = this.props.photos.map(photo => {
                return (
            <Link to={`/photos/${photo.id}`}>
                <li key={photo.id} className="profile-thumbnail" value={photo.id}>
            {/* return <li key={photo.id} className="profile-thumbnail" value={photo.id}> */}
                    <ProfilePhotosDetail photo={photo} key={photo.id}/>
            </li>
                </Link>)
        })
        return(
            // <div className="outer-profile-container">
                <div className="profile-grid">
                {/* <div className="profile-grid"> */}
                    {photosList}
                </div>
            // </div>
        )
    }
}

export default ProfilePhotos;