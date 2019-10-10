import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
    componentDidMount() {
        debugger;
        this.props.fetchPhoto(this.props.match.params.photoId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.photo.id != this.props.match.params.photoId) {
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
      </div>
    );
  }
}

export default PhotoShow;
