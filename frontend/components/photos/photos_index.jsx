import React from 'react';
import PhotosIndexItemContainer from './photo_index_item_container';
import FeaturedPhotosIndexItem from './featured_photos_index_item';
var imagesLoaded = require("imagesloaded");


class PhotosIndex extends React.Component{
    constructor(props){
        // // ;
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchAllUsers();
    }

    render() {
        //  ;
        let followList;
        let followSection;
        if (this.props.followPhotos.length > 0) {
            let sortedFollowPhotos = this.props.followPhotos.sort((a, b) => (a.like_ids.length < b.like_ids.length) ? 1 : -1);
            followList = sortedFollowPhotos.map(photo => {
                return <PhotosIndexItemContainer photo={photo} key={photo.id * 1000} />
            }).slice(0, 5);
            followSection = (
                <div className="follow-photo-container">  
                    {followList}
                </div>
            )
        } else {
            followSection = <div></div>
        }

        let sorted = this.props.photos.sort((a, b) => (a.like_ids.length < b.like_ids.length) ? 1 : -1);
        let photosList = sorted.map(photo => {
            return <FeaturedPhotosIndexItem photo={photo} key={photo.id}/>
        })
        let featuredPhotoSection = (
            <div className="featured-photo-container">
                {photosList}
            </div>
        )

        let UsersYouFollow = <div></div>

        if (this.props.followPhotos.length > 0) {
            UsersYouFollow = (
              <ul className="photos-index-3">
                <h1 className="follow-section-header"> By users you follow </h1>
                {followSection}
              </ul>
            );
        } 

        var $featuredGrid = $('.featured-photo-container');
        $featuredGrid.imagesLoaded(function() {
          $featuredGrid.masonry({
            itemSelector: '.featured-photo-item',
            columnWidth: 500,
            fitWidth: true,
            gutter: 10
          });
        });

        return (
          <div className="photos-index-container">
            {/* <div className="home-feed-text">Home Feed</div> */}
            <div className="home-feed-text">The Roost</div>
            {UsersYouFollow}
            <div className="featured-photos-index">
              <h1 className="featured-photo-section-header"> Featured </h1>
              {featuredPhotoSection}
            </div>
          </div>
        );
    }
}

export default PhotosIndex;