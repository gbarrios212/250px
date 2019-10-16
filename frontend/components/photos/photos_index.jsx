import React from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends React.Component{
    constructor(props){
        // debugger;
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchAllUsers();
    }

    render() {
        // debugger;
        let photosList = this.props.photos.map(photo => {
            return <PhotosIndexItem photo={photo} key={photo.id}/>
        })
        return (
            <div className="photos-index-container">
                <ul className="photos-index">
                    {photosList}
                </ul>
            </div>
        )
    }
}

export default PhotosIndex;