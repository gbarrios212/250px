import React from 'react';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsCreateFormContainer from '../comments/comments_create_form_container';
import LikesContainer from '../likes/likes_container';
// import Likes from '../likes/likes';

class PhotoShow extends React.Component {
  constructor(props){
    // debugger;
    super(props)
  }


  componentDidMount() {
    // debugger;
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.photoId !== this.props.match.params.photoId){
      this.props.fetchPhoto(this.props.match.params.photoId);
    }
  }

  render () {
    // debugger;
      if (!this.props.photo) {
        return <div>Loading...</div>;
      }
      // debugger
      ;

      let like;
      let comment;

      like = this.props.currentUser ? <LikesContainer photo={this.props.photo}/> 
        : <div>
            <i className="far fa-heart"></i>
            {this.props.photo.liker_ids.length}
          </div>;
      
      comment = this.props.currentUser ? <CommentsCreateFormContainer photoId={this.props.match.params.photoId}/> 
        : <div></div>;

        // debugger;
    return (
      <div className="show-page">
        <div className="outer-image-container">
          <span className="image-container">
            <div className="matte-box">
              <Link to="/" className="close-button">x
              </Link>
              {/* <div className="outer-container"> */}
                <div className="inner-container">
                  <img className="show-img" src={this.props.photo.photoUrl} alt=""></img>
                </div>
              {/* </div> */}
            </div>
          </span>
        </div>
        <span className="info-and-comments-section">
          <span className="info-section">
            {/* <Likes photo={this.props.photo}/> */}
            {/* <LikesContainer photo={this.props.photo}/> */}
            <div className="like-info">
              {like}
            </div>
            <div className="header">
              <div className="header-info">
                <h1>{this.props.photo.name}</h1>
                <br/>
                <p> by AUTHOR NAME HERE {this.props.photo.author_id} • FOLLOWING OR NOT HERE </p>
              </div>
              <div className="header-avatar">
                <p>AVATAR HERE </p>
              </div>
            </div>
            <div className="location-date">
              <p>{this.props.photo.date_taken}</p>
              <br/>
              <p>{this.props.photo.location}</p>
              <br/>
              <p>{this.props.photo.description}</p>
              <br/>
            </div>
            <div className="details">
              <div className="camera-info">
                <p>{this.props.photo.camera}</p>
                <br/>
              </div>
              <div className="lens-info">
                <p>{this.props.photo.lens}</p>
                <br/>
              </div>
              <div className="shot-info">
                <p>{this.props.photo.focal_length}</p>
                <br/>
                <p>{this.props.photo.aperture}</p>
                <br/>
                <p>{this.props.photo.shutter_speed}</p>
                <br/>
                <p>{this.props.photo.iso}</p>
                <br/>
              </div>
            </div>
            <div className="category">
              <p>{this.props.photo.category}</p>
              <br/>
            </div>
            <div className="keywords">
              <p>KEYWORDS HERE</p>
            </div>
          
          </span>
          <span className="comments-section">
              {/* <CommentsCreateFormContainer photoId={this.props.match.params.photoId}/> */}
              {comment}
              <CommentsIndexContainer photoId={this.props.match.params.photoId}/>
          </span>
        </span>
      </div>
    );
  }
}

export default PhotoShow;
