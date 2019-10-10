import React from 'react';

const PhotosIndexItem = ({photo}) => {
    return (
        <div>
            <li>{photo.name}
                <br/>
                <img src={photo.photoUrl} alt=""></img>
            </li>
        </div>
    )
}

export default PhotosIndexItem;