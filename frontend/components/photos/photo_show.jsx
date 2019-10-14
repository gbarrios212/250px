import React from 'react';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsCreateFormContainer from '../comments/comments_create_form_container';
import LikesContainer from '../likes/likes_container';
// import Likes from '../likes/likes';

class PhotoShow extends React.Component {

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.photoId !== this.props.match.params.photoId){
      this.props.fetchPhoto(this.props.match.params.photoId);
    }
  }

  render () {
      if (!this.props.photo) {
        return <div>Loading...</div>;
      }
    return (
      <>
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
        <span className="info-section">
          {/* <Likes photo={this.props.photo}/> */}
          <LikesContainer photo={this.props.photo}/>
          <h1>{this.props.photo.name}</h1>
          <br/>
          <p>{this.props.photo.location}</p>
          <br/>
          <p>{this.props.photo.date_taken}</p>
          <br/>
          <p>{this.props.photo.camera}</p>
          <br/>
          <p>{this.props.photo.lens}</p>
          <br/>
          <p>{this.props.photo.focal_length}</p>
          <br/>
          <p>{this.props.photo.aperture}</p>
          <br/>
          <p>{this.props.photo.shutter_speed}</p>
          <br/>
          <p>{this.props.photo.iso}</p>
          <br/>
          <p>{this.props.photo.description}</p>
          <br/>
          <p>{this.props.photo.created_at}</p>
          <br/>
          <p>{this.props.photo.category}</p>
          <br/>
          <p>{this.props.photo.author_id}</p>
        </span>
        <span className="comments-section">
            <CommentsCreateFormContainer photoId={this.props.match.params.photoId}/>
            <CommentsIndexContainer photoId={this.props.match.params.photoId}/>
        </span>
      </>
    );
  }
}

export default PhotoShow;
