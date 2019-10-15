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
        <span className="info-and-comments-section">
          <span className="info-section">
            {/* <Likes photo={this.props.photo}/> */}
            {/* <LikesContainer photo={this.props.photo}/> */}
            {like}
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
              {/* <CommentsCreateFormContainer photoId={this.props.match.params.photoId}/> */}
              {comment}
              <CommentsIndexContainer photoId={this.props.match.params.photoId}/>
          </span>
        </span>
      </>
    );
  }
}

export default PhotoShow;
