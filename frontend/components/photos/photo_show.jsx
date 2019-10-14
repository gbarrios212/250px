import React from 'react';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsCreateFormContainer from '../comments/comments_create_form_container';

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
        <div className="matte-box">
          <Link to="/" className="close-button">x
          </Link>
          {/* <div className="outer-container"> */}
            <div className="inner-container">
              <img className="show-img" src={this.props.photo.photoUrl} alt=""></img>
            </div>
          {/* </div> */}
        </div>
        <span className="comments-section">
            <CommentsCreateFormContainer photoId={this.props.match.params.photoId}/>
            <CommentsIndexContainer photoId={this.props.match.params.photoId}/>
        </span>
      </>
    );
  }
}

export default PhotoShow;
