import PhotosForm from './photos_form';
import React from 'react';

class PhotoEditForm extends React.Component {
    constructor(props){
      super(props)
      // debugger;
      this.state = { photo: this.props.photo, disabled: true }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.confirmDelete = this.confirmDelete.bind(this);
    }

    componentWillUnmount(){
      this.props.clearErrors();
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.action(this.state.photo);
    }
    
    update(field) {
      // debugger;
      return e => {
          this.setState({ photo: {[field]: e.currentTarget.value}})
      }
    }

    confirmDelete(e){
      e.preventDefault();
      let result = confirm("Are you furr real?");
      if (result){
        this.props.deletePhoto(this.props.photo.id);
      }
    }

    render() {
      // debugger;
      const errorsList = (this.props.errors) ? ( 
        this.props.errors.map((error, index) => (
        <li className="errors" key={index}>{error}</li>
      ))) : (
        <div></div>
      );

      return (
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <br/>
          {errorsList}
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onChange={this.update("name")} value={this.state.name} disabled={this.state.disabled}/>
          <label htmlFor="description">Description</label>
          <textarea id="description" type="text" onChange={this.update("description")} value={this.state.description} placeholder="Tell us more about your photo" disabled={this.state.disabled}/>

          <label htmlFor="category">Category</label>
          <select id="category" name="category" type="text" onChange={this.update("category")} value={this.state.category} disabled={this.state.disabled}>
                    <option value="uncategorized">Uncategorized</option>
                    <option value="abstract">Abstract</option>
                    <option value="aerial">Aerial</option>
                    <option value="animals">Animals</option>
                    <option value="black and white">Black and White</option>
                    <option value="celebrities">Celebrities</option>
                    <option value="city and architecture">City & Architecture</option>
                    <option value="commercial">Commercial</option>
                    <option value="concert">Concert</option>
                    <option value="family">Family</option>
                    <option value="fashion">Fashion</option>
                    <option value="film">Film</option>
                    <option value="fine art">Fine Art</option>
                    <option value="food">Food</option>
                    <option value="journalism">Journalism</option>
                    <option value="landscapes">Landscapes</option>
                    <option value="macro">Macro</option>
                    <option value="nature">Nature</option>
                    <option value="night">Night</option>
                    <option value="nude">Nude</option>
                    <option value="people">People</option>
                    <option value="performing arts">Performing Arts</option>
                    <option value="sport">Sport</option>
                    <option value="still life">Still Life</option>
                    <option value="street">Street</option>
                    <option value="transportation">Transportation</option>
                    <option value="travel">Travel</option>
                    <option value="underwater">Underwater</option>
                    <option value="urban exploration">Urban Exploration</option>
                    <option value="wedding">Wedding</option>
                </select>

          <label htmlFor="location">Location</label>
          <input id="location" type="text" onChange={this.update("location")} value={this.state.location} disabled={this.state.disabled}/>
          {/* <label htmlFor="lat">Latitude</label>
          <input id="lat" type="text" onChange={this.update("lat")} value={this.state.lat}/>
          <label htmlFor="long">Longitude</label>
          <input id="long" type="text" onChange={this.update("long")} value={this.state.long}/> */}
          <label htmlFor="date_taken">Date Taken</label>
          <input id="date_taken" type="text" onChange={this.update("date_taken")} value={this.state.date_taken} placeholder="(dd/mm/yyyy)" disabled={this.state.disabled}/>
          
          <label>Camera Info</label>
          {/* <span className="cam-info"> */}
            <label htmlFor="camera"><p>Camera</p></label>
            <input id="camera" type="text" onChange={this.update("camera")} value={this.state.camera} disabled={this.state.disabled}/>
            <label htmlFor="lens"><p>Lens</p></label>
            <input id="lens" type="text" onChange={this.update("lens")} value={this.state.lens} disabled={this.state.disabled}/>
            <label htmlFor="focal_length"><p>Focal Length</p></label>
            <input id="focal_length" type="text" onChange={this.update("focal_length")} value={this.state.focal_length} disabled={this.state.disabled}/>
            <label htmlFor="aperture"><p>Aperture</p></label>
            <input id="aperture" type="text" onChange={this.update("aperture")} value={this.state.aperture} disabled={this.state.disabled}/>
            <label htmlFor="shutter_speed"><p>Shutter Speed</p></label>
            <input id="shutter_speed" type="text" onChange={this.update("shutter_speed")} value={this.state.shutter_speed} disabled={this.state.disabled}/>
            <label htmlFor="iso"><p>ISO</p></label>
            <input id="iso" type="text" onChange={this.update("iso")} value={this.state.iso} disabled={this.state.disabled}/>
          {/* </span> */}
          
          <button className="edit-button" disabled={this.state.disabled}>Change that Cat!</button>
          <button className="delete-button" onClick={this.confirmDelete} disabled={this.state.disabled}>Delete this Cat :(</button>
        </form>
      );
    }
}
  
export default PhotoEditForm;