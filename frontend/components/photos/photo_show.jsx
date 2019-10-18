import React from 'react';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsCreateFormContainer from '../comments/comments_create_form_container';
import LikesContainer from '../likes/likes_container';
// import Likes from '../likes/likes';

class PhotoShow extends React.Component {
  constructor(props){
    // ;
    super(props)
  }


  componentDidMount() {
    // ;
    this.props.fetchPhotos();
    this.props.fetchAllUsers().then(() => 
      this.props.fetchPhoto(this.props.match.params.photoId)
    );
  }

  componentDidUpdate(prevProps) {
    // ;
    if (prevProps.match.params.photoId !== this.props.match.params.photoId){
      this.props.fetchAllUsers();
      this.props.fetchPhoto(this.props.match.params.photoId);
    }
  }

  render () {
    // ;
      if (!this.props.photo) {
        return <div>Loading...</div>;
      }
      // // 
      ;

      let like;
      let comment;
      let commentHeader;
      let category; 


      like = this.props.currentUser ? <LikesContainer photo={this.props.photo}/> 
        : <div>
            <i className="far fa-heart"></i>
            {this.props.photo.liker_ids.length}
          </div>;
      
      comment = this.props.currentUser ? <CommentsCreateFormContainer photoId={this.props.match.params.photoId}/> 
        : <div></div>;

      commentHeader = this.props.photo.comment_ids.length === 1 ? " Comment" : " Comments"

      category = this.props.photo.category ? <p>{this.props.photo.category[0].toUpperCase() + this.props.photo.category.slice(1)}</p> : <div></div>

      debugger;
        // // ;
    return (
      <div className="show-page">
        <div className="outer-image-container">
          <span className="image-container">
            <div className="matte-box">
              {/* <Link to="/" className="close-button"> */}
                <span onClick={() => this.props.history.go(-1)} className="circle">x</span>
              {/* </Link> */}
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
            <div className="photo-header">
              <div className="photo-header-info">
                <h1>{this.props.photo.name}</h1>
                <br/>
                <p> by <Link to={`/users/${this.props.photoAuthor.id}`} className="author-link">{this.props.photoAuthor.username}</Link> • {this.props.currentUser.following_ids.includes(this.props.photoAuthor.id) ? " Following " : " "} </p>
            
              </div>
              <div className="photo-header-avatar-container">
                <Link to={`/users/${this.props.photoAuthor.id}`}>
                  <img className="photo-header-avatar" src={this.props.photoAuthor.profilePictureUrl}/>
                </Link>
              </div>
            </div>
            <div className="location-date">
              <p><i className="far fa-clock"></i>{this.props.photo.created_at}</p>
              <br/>
              <p>{this.props.photo.location}</p>
              <br/>
              <p>{this.props.photo.description}</p>
              <br/>
            </div>
            <div className="details">
              <div className="camera-info">
                <p><i className="fas fa-camera"></i>{this.props.photo.camera}</p>
                <br/>
              </div>
              <div className="lens-info">
                <i className="far fa-circle"></i>
                <p>{this.props.photo.lens}</p>
                <br/>
              </div>
              <div className="shot-info">
                <i className="fas fa-sliders-h"></i>
                <p>{this.props.photo.focal_length}</p>
                {/* <br/> */}
                <p>{this.props.photo.aperture}</p>
                {/* <br/> */}
                <p>{this.props.photo.shutter_speed}</p>
                {/* <br/> */}
                <p>{this.props.photo.iso}</p>
                {/* <br/> */}
              </div>
            </div>
            <div className="category">
              <p className="category-text">Category</p>
                {category}
              <br/>
            </div>
            <div className="keywords">
              {/* <p>KEYWORDS HERE</p> */}
            </div>
          
          </span>
          <span className="comments-section">
              <h1>
                {this.props.photo.comment_ids.length}{commentHeader}
              </h1>
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
