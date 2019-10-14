import React from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends React.Component{
    constructor(props){
        // debugger;
        super(props)
    }

    componentDidMount() {
        debugger;
        this.props.fetchPhotos();
    }

    render() {
        // debugger;
        let photosList = this.props.photos.map(photo => {
            return <PhotosIndexItem photo={photo} key={photo.id}/>
        })
        return (
            <ul className="photos-index">
                {photosList}
            </ul>
        )
    }
}

export default PhotosIndex;