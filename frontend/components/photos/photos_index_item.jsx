import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = ({photo}) => {
    // debugger;
    return (
        <div>
            <li className="index-items-list-items">
                <Link to={`/photos/${photo.id}`}>
                    <img src={photo.photoUrl} alt=""></img>
                    {/* {photo.author.username} */}
                </Link>
                <div className="index-icons">
                    <div className="index-icons-likes">
                        <i className="far fa-heart" id="index-heart"></i>{photo.liker_ids.length}
                        {/* <div className="index-likes">
                            {photo.liker_ids.length}
                        </div> */}
                    </div>
                    <div className="index-icons-comments">
                        <i class="far fa-comment"></i>{photo.comment_ids.length}
                    </div>
                </div>
                <p className="index-photo-title">
                    {photo.name}
                </p>
            </li>
        </div>
    )
}

export default PhotosIndexItem;