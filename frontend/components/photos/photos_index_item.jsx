import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = ({photo}) => {
    // debugger;
    return (
        <div>
            <li>
                <Link to={`/photos/${photo.id}`}>
                    <img src={photo.photoUrl} alt=""></img>
                </Link>
            </li>
        </div>
    )
}

export default PhotosIndexItem;