import React from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends React.Component{
    constructor(props){
        // //debugger;
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchAllUsers();
    }

    render() {
        //debugger;
        let sorted = this.props.photos.sort((a, b) => (a.like_ids.length < b.like_ids.length) ? 1 : -1);
        let photosList = sorted.map(photo => {
            return <PhotosIndexItem photo={photo} key={photo.id}/>
        })
        return (
            <div className="photos-index-container">
                <div className="home-feed-text">Home Feed</div>
                <ul className="photos-index">
                    {photosList}
                </ul>
            </div>
        )
    }
}

export default PhotosIndex;