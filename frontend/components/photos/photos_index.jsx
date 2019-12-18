import React from 'react';
import PhotosIndexItem from './photos_index_item';
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
                return <PhotosIndexItem photo={photo} key={photo.id * 1000} />
            })
            followSection = (
                <div className="follow-section">
                    <h1 className="follow-section-header"> Users you like </h1> 
                    {followList}
                </div>
            )
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
            <ul className="photos-index-3">
                {followSection}
            </ul>
            <div className="featured-photos-index">
              <h1 className="featured-photo-section-header"> Featured </h1>
              {featuredPhotoSection}
            </div>
          </div>
        );
    }
}

export default PhotosIndex;