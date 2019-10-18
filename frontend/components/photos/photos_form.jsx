import React from 'react';
import { RECEIVE_PHOTO_ERRORS } from '../../actions/photo_actions'

class PhotosForm extends React.Component {
    constructor(props){
        super(props);
        let newPhotoProps = Object.assign({}, this.props.photo, {photoConnect: null, photoUrl: null});
        this.state = newPhotoProps;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }
 
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        let keys = Object.keys(this.state)
        keys.forEach(key => {
            if (this.state[key]){
                formData.append(`photo[${key}]`, this.state[key])
            }
        })
        $.ajax({
            url: 'api/photos',
            method: 'POST',
            data: formData,
            contentType: false, 
            processData: false
        // }).then((response) => console.log(response.message),
        // }).then((response) => {
        //     return this.props.currentUser.photo_ids.push(response["id"])
        // },
        }).then((response) => {
             ;
            return this.props.receiveNewPhoto(response),
            (response) => this.props.receivePhotoErrors(response.responseJSON)
        })
        //test here for promise 
            //close modal 
            //fetch photos again
        .then(() => this.props.closeModal())
        //test here for promise
        ;
        // // ;
        // this.props.currentUser.photo_ids.push(this.props.photo.id);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoConnect: file, photoUrl: fileReader.result});
        };
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    update(field) {
        // ;
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {
    
        const errorsList = (this.props.errors) ? ( 
            this.props.errors.map((error, index) => (
            <li className="errors" key={index}>{error}</li>
        ))) : (
            <div></div>
        );
        
        const preview = this.state.photoUrl ? <img className="create-photo-preview" src={this.state.photoUrl} /> : null;
        return (
            <div className="modal-container">
                <div className="image-preview-area">
                    <h3 className="image-preview-header">Image Preview</h3>
                    <div className="create-photo-preview-container">
                        {preview}
                    </div>
                </div>
                <form className="create-form" onSubmit={this.handleSubmit}>
                    {errorsList}
                    <br/>
                    <label htmlFor="file">Choose File:</label>
                    <input id="file" type="file" onChange={this.handleFile} />
                    
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" onChange={this.update("name")} value={this.state.name}/>
                    <label htmlFor="description">Description</label>
                    <input id="description" type="text" onChange={this.update("description")} value={this.state.description}/>
                    
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" type="text" onChange={this.update("category")} value={this.state.category}>
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

                    <label htmlFor="location">Location:</label>
                    <input id="location" type="text" onChange={this.update("location")} value={this.state.location}/>
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
                    <button className="create-button">Save that Swan!</button>
                </form>
            </div>
        );
    }
}

export default PhotosForm;