import React from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends React.Component{
    constructor(props){
        // // ;
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchAllUsers();
    }

    render() {
        //  ;
        let followList;
        let followSection;
        if (this.props.followPhotos.length > 0) {
            let sortedFollowPhotos = this.props.followPhotos.sort((a, b) => (a.like_ids.length < b.like_ids.length) ? 1 : -1);
            followList = sortedFollowPhotos.map(photo => {
                return <PhotosIndexItem photo={photo} key={photo.id * 1000} />
            })
            followSection = (
                <div className="follow-section">
                    <h1 className="follow-section-header"> Users you like </h1> 
                    {followList}
                </div>
            )
        }
        let sorted = this.props.photos.sort((a, b) => (a.like_ids.length < b.like_ids.length) ? 1 : -1);
        let photosList = sorted.map(photo => {
            return <PhotosIndexItem photo={photo} key={photo.id}/>
        })
        let photoSection = (
            <div className="photo-section">
                <h1 className="photo-section-header"> Featured </h1>
                {photosList}
            </div>
        )

        return (
            <div className="photos-index-container">
                {/* <div className="home-feed-text">Home Feed</div> */}
                <div className="home-feed-text">The Roost</div>
                <ul className="photos-index-3">
                    {followSection}
                </ul>
                <ul className="photos-index-2">
                    {photoSection}
                </ul>
            </div>
        )
    }
}

export default PhotosIndex;