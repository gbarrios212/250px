import React from 'react';
import ProfilePhotosDetail from './profile_photos_detail';
import { Link } from 'react-router-dom';
var imagesLoaded = require("imagesloaded");

class ProfilePhotos extends React.Component{
    constructor(props){
        super(props)

      
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {

        if (this.props.currentUser){       
            if (this.props.photos.length === 0 && this.props.currentUser.id === this.props.currentId){
                return (
                    <div className="outer-new-upload-container">
                    <div className="new-upload-button">
                        <Link to="/manage/upload"> 
                            Upload a Photo
                        </Link>
                    </div>
                </div>
            );}
        }

        if (!this.props.photos[0]){
            return <div className="no-photo-message">This user does not have any photos.</div>
        }

        let photosList = this.props.photos.map(photo => {
                return (
                  <div className="profile-thumbnail">
                    <Link to={`/photos/${photo.id}`}>
                      <li key={photo.id} value={photo.id}>
                        {/* return <li key={photo.id} className="profile-thumbnail" value={photo.id}> */}
                        <ProfilePhotosDetail photo={photo} key={photo.id} />
                      </li>
                    </Link>
                  </div>
                );
        })

        var $grid = $('.profile-grid');
            $grid.imagesLoaded( function() {
                $grid.masonry({
                    itemSelector: '.profile-thumbnail',
                    columnWidth: 400,
                    fitWidth: true
          })
        })

        return(
            <div className="outer-profile-container">
                <div className="profile-grid">
                {/* <div className="profile-grid"> */}
                    {photosList}
                </div>
            </div>
        )
    }
}

export default ProfilePhotos;