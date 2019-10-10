import React from 'react';
import { Link } from 'react-router-dom';
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
            return <PhotosIndexItem photo={photo} />
        })
        return (
            <span>
                {photosList}
            </span>
        )
    }
}

export default PhotosIndex;