import React from 'react';
import { Link } from 'react-router-dom';

class PhotosIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let photosList = this.props.photos.map(photo => {
            return <PhotosIndexItem photo={photo} />
        })
        return (
            <div>
                {photosList}
            </div>
        )
    }
}