import PhotosForm from './photos_form';
import React from 'react';

class PhotoEditForm extends React.Component {
    constructor(props){
      super(props)
      this.state = this.props.photo
      // debugger;
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      // debugger;
      this.props.action(this.state)
        .then(() => this.props.history.push('/'));
    }
    
    update(field) {
      return e => {
          this.setState({[field]: e.currentTarget.value})
      }
    }

    componentDidMount() {
      // debugger;
      this.props.fetchPhoto(this.props.match.params.photoId);
    }
  
    componentDidUpdate(prevProps) {
      // debugger;
      if (prevProps.photo.id != this.props.match.params.photoId) {
        this.props.fetchphoto(this.props.match.params.photoId);
      }
    }
  
    render() {
      // debugger;
      return (
        <form className="edit_form" onSubmit={this.handleSubmit}>
          {/* <label htmlFor="file">Choose File:</label>
          <input id="file" type="file" onChange={this.handleFile} />
          <h3>Image Preview</h3>
          {preview} */}
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={this.update("name")} value={this.state.name}/>
          <label htmlFor="location">Location:</label>
          <input id="location" type="text" onChange={this.update("location")} value={this.state.location}/>
          <label htmlFor="lat">Latitude:</label>
          <input id="lat" type="text" onChange={this.update("lat")} value={this.state.lat}/>
          <label htmlFor="long">Longitude:</label>
          <input id="long" type="text" onChange={this.update("long")} value={this.state.long}/>
          <label htmlFor="date_taken">Date Taken:</label>
          <input id="date_taken" type="text" onChange={this.update("date_taken")} value={this.state.date_taken}/>
          <label htmlFor="camera">Camera:</label>
          <input id="camera" type="text" onChange={this.update("camera")} value={this.state.camera}/>
          <label htmlFor="lens">Lens:</label>
          <input id="lens" type="text" onChange={this.update("lens")} value={this.state.lens}/>
          <label htmlFor="focal_length">Focal Length:</label>
          <input id="focal_length" type="text" onChange={this.update("focal_length")} value={this.state.focal_length}/>
          <label htmlFor="aperture">Aperture:</label>
          <input id="aperture" type="text" onChange={this.update("aperture")} value={this.state.aperture}/>
          <label htmlFor="shutter_speed">Shutter Speed:</label>
          <input id="shutter_speed" type="text" onChange={this.update("shutter_speed")} value={this.state.shutter_speed}/>
          <label htmlFor="iso">ISO:</label>
          <input id="iso" type="text" onChange={this.update("iso")} value={this.state.iso}/>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" onChange={this.update("description")} value={this.state.description}/>
          <button className="edit-button">Change that Cat!</button>
          {/* <button className="delete-button" onClick={this.props.deletePhoto(this.props.photo.id)}>Delete this Cat :(</button> */}
        </form>
      );
    }
}
  
export default PhotoEditForm;