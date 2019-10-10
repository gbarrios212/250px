import React from 'react';

class PhotosForm extends React.Component {
    constructor(props){
        super(props);
        let newPhotoProps = Object.assign({}, this.props.photo, {photoConnect: null, photoUrl: null});
        this.state = newPhotoProps;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        let keys = Object.keys(this.state)
        keys.forEach(key => {
            formData.append(`photo[${key}]`, this.state[key])
        })
        $.ajax({
            url: 'api/photos',
            method: 'POST',
            data: formData,
            contentType: false, 
            processData: false
        }).then((response) => console.log(response.message),
            (response) => console.log(response.responseJSON)
        );
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoConnect: file});

        }
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {
        return (
            <form className="create_form" onSubmit={this.handleSubmit}>
                <label htmlFor="file">Choose File:</label>
                <input id="file" type="file" onChange={this.handleFile} />
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
                <button className="create-button">Create that Cat!</button>
            </form>
        );
    }
}

export default PhotosForm;