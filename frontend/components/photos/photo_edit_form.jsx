import PhotosForm from './photos_form';
import React from 'react';
import merge from 'lodash/merge';

class PhotoEditForm extends React.Component {
    constructor(props){
      super(props)
      this.state = { photo: this.props.photo, disabled: false }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.confirmDelete = this.confirmDelete.bind(this);
      this.toggleDisable = this.toggleDisable.bind(this);
    }

    toggleDisable(){
      
    }

    componentDidUpdate(prevProps){
      if(this.props.photo !== prevProps.photo){
        this.setState({photo: this.props.photo})
      }
    }

    componentWillUnmount(){
      this.props.clearErrors();
    }

    // componentDidMount(){
      
    // }

    handleSubmit(e) {
      e.preventDefault();
      this.props.updatePhoto(this.state.photo);
    }
    
    update(field) {
      return e => {
          this.setState(merge({}, this.state, { photo: {[field]: e.currentTarget.value}}))
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
      // // ;
      const errorsList = (this.props.errors) ? ( 
        this.props.errors.map((error, index) => (
        <li className="errors" key={index}>{error}</li>
      ))) : (
        <div></div>
      );

      if(!this.props.photo){
        return <div className="disabled">Select a photo to start editing</div>
      }

      return (
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <br/>
          {errorsList}
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onChange={this.update("name")} value={this.state.photo.name} disabled={this.state.disabled}/>
          <label htmlFor="description">Description</label>
          <textarea id="description" type="text" onChange={this.update("description")} value={this.state.photo.description} placeholder="Tell us more about your photo" disabled={this.state.disabled}/>

          <label htmlFor="category">Category</label>
          <select id="category" name="category" type="text" onChange={this.update("category")} value={this.state.photo.category} disabled={this.state.disabled}>
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
          <input id="location" type="text" onChange={this.update("location")} value={this.state.photo.location} disabled={this.state.disabled}/>
          <label htmlFor="date_taken">Date Taken</label>
          <input id="date_taken" type="text" onChange={this.update("date_taken")} value={this.state.photo.date_taken} placeholder="(dd/mm/yyyy)" disabled={this.state.disabled}/>
          
          <label>Camera Info</label>
          {/* <span className="cam-info"> */}
            <label htmlFor="camera"><p>Camera</p></label>
            <input id="camera" type="text" onChange={this.update("camera")} value={this.state.photo.camera} disabled={this.state.disabled}/>
            <label htmlFor="lens"><p>Lens</p></label>
            <input id="lens" type="text" onChange={this.update("lens")} value={this.state.photo.lens} disabled={this.state.disabled}/>
            <label htmlFor="focal_length"><p>Focal Length</p></label>
            <input id="focal_length" type="text" onChange={this.update("focal_length")} value={this.state.photo.focal_length} disabled={this.state.disabled}/>
            <label htmlFor="aperture"><p>Aperture</p></label>
            <input id="aperture" type="text" onChange={this.update("aperture")} value={this.state.photo.aperture} disabled={this.state.disabled}/>
            <label htmlFor="shutter_speed"><p>Shutter Speed</p></label>
            <input id="shutter_speed" type="text" onChange={this.update("shutter_speed")} value={this.state.photo.shutter_speed} disabled={this.state.disabled}/>
            <label htmlFor="iso"><p>ISO</p></label>
            <input id="iso" type="text" onChange={this.update("iso")} value={this.state.photo.iso} disabled={this.state.disabled}/>
          {/* </span> */}
          
          <button className="edit-button" disabled={this.state.disabled}>Change that Cat!</button>
          <button className="delete-button" onClick={this.confirmDelete} disabled={this.state.disabled}>Delete this Cat :(</button>
        </form>
      );
    }
}
  
export default PhotoEditForm;