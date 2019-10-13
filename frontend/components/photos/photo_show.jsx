import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="matte-box">
        {/* <div className="outer-container"> */}
          <div className="inner-container">
            <img className="show-img" src={this.props.photo.photoUrl} alt=""></img>
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default PhotoShow;
