import React from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        let photosList = this.props.photos.map(photo => {
            return <PhotosIndexItem photo={photo} key={photo.id}/>
        })
        debugger;
        return (
            <ul className="photos-index">
                {photosList}
            </ul>
        )
    }
}

export default PhotosIndex;