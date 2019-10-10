import React from 'react';

class PhotosForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.photo;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.update("name")} value={this.state.name}/>
                <input type="text" onChange={this.update("location")} value={this.state.location}/>
                <input type="text" onChange={this.update("lat")} value={this.state.lat}/>
                <input type="text" onChange={this.update("long")} value={this.state.long}/>
                <input type="text" onChange={this.update("date_taken")} value={this.state.date_taken}/>
                <input type="text" onChange={this.update("camera")} value={this.state.camera}/>
                <input type="text" onChange={this.update("lens")} value={this.state.lens}/>
                <input type="text" onChange={this.update("focal_length")} value={this.state.focal_length}/>
                <input type="text" onChange={this.update("aperture")} value={this.state.aperture}/>
                <input type="text" onChange={this.update("shutter_speed")} value={this.state.shutter_speed}/>
                <input type="text" onChange={this.update("iso")} value={this.state.iso}/>
                <input type="text" onChange={this.update("description")} value={this.state.description}/>
                <button>Create that Cat!</button>
            </form>
        );
    }
}

export default PhotosForm;