import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = (props) => {
    // // ;
    return (
        
            <div className="follow-items-list-items">
                <Link to={`/photos/${props.photo.id}`}>
                    <img src={props.photo.photoUrl} className="index-thumbnail" alt=""></img>
                </Link>
                <Link to={`/photos/${props.photo.id}`}>
                    <div className="follow-modal">
                            <div className="follow-author-info">
                                <div className="follow-avatar-container">
                                    <img src={props.authorPic} className="follow-avatar"/>
                                </div>
                                <div className="follow-name">{props.author}</div>
                            </div>
                        <div className="follow-info">
                            <div className="index-icons">
                                <div className="index-icons-likes">
                                    <i className="far fa-heart" id="index-heart"></i>{props.photo.like_ids.length}
                                </div>
                                <div className="index-icons-comments">
                                    <i class="far fa-comment"></i>{props.photo.comment_ids.length}
                                </div>
                            </div>
                            <p className="index-photo-title">
                                {props.photo.name}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
    )
}

export default PhotosIndexItem;