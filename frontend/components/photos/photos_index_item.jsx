import React from 'react';

const PhotosIndexItem = ({photo}) => {
    return (
        <div>
            <ul>
                <li>{photo.name}
                    <br/>
                    {photo.photo}
                </li>
            </ul>
        </div>
    )
}

export default PhotosIndexItem;