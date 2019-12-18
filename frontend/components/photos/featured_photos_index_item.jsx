import React from "react";
import { Link } from "react-router-dom";

const FeaturedPhotosIndexItem = ({ photo }) => {
  // // ;
  return (
    <div className="featured-photo-item">
      <Link to={`/photos/${photo.id}`}>
        <div className="featured-modal"></div>
      </Link>
        <img id="featured-thumbnail" src={photo.photoUrl} alt=""></img>
        {/* {photo.author.username} */}
      <div className="featured-info">

        <div className="featured-index-icons">
            <div className="featured-index-icons-likes">
            <i className="far fa-heart" id="ft-index-heart"></i>
            {photo.like_ids.length}
            {/* <div className="index-likes">
                                {photo.liker_ids.length}
                            </div> */}
            </div>
            <div className="featured-index-icons-comments">
            <i className="far fa-comment" id="ft-index-comment"></i>
            {photo.comment_ids.length}
            </div>
        </div>
        <p className="featured-index-photo-title">{photo.name}</p>
      </div>
    </div>
  );
};

export default FeaturedPhotosIndexItem;
