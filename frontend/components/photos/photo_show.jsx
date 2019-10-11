import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.fetchPhoto(this.props.match.params.photoId);
    }

    componentDidUpdate(prevProps) {
        // debugger;
        // if (prevProps.photo.id != this.props.match.params.photoId) 
        if (prevProps.match.params.photoId != this.props.match.params.photoId)
        {
          this.props.fetchPhoto(this.props.match.params.photoId);
        }
    }

  render () {
    //   debugger
      if (!this.props.photo) {
        return <div>Loading...</div>;
      }
    return (
      <div>
          <img src={this.props.photo.photoUrl} alt=""></img>
          <Link to={`/photos/${this.props.photo.id}/edit`}>Edit this Cat!</Link>
      </div>
    );
  }
}

export default PhotoShow;
