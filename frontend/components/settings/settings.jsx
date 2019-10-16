import React from 'react';

class Settings extends React.Component{
    constructor(props){
        super(props)
        let newUserProps = Object.assign({}, this.props.currentUser, {profilePicture: null, profilePictureUrl: null});
        this.state= newUserProps;
        this.handleFile = this.handleFile.bind(this);
    }

    //fetch user?

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        let keys = Object.keys(this.state)
        keys.forEach(key => {
            if (this.state[key]){
                formData.append(`user[${key}]`, this.state[key])
            }
        })
        $.ajax({
            url: `api/users/${this.props.currentUser.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false, 
            processData: false
        // }).then((response) => this.props.receiveNewPhoto(response),
        //     (response) => this.props.receivePhotoErrors(response.responseJSON))
        }).then(
            (response) => console.log(response.message),
            (response) => console.log(response.responseJSON)
        )
        ;
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({profilePicture: file, profilePictureUrl: fileReader.result});
        };
        if (file){
            fileReader.readAsDataURL(file);
        }
    }


    render (){
        const preview = this.state.profilePictureUrl ? <img className="preview" src={this.state.profilePictureUrl} /> : null;
        return(
            <div className="settings-container">Settings
                <div className="personal-info">

                </div>
                <form className="profile-info"  onSubmit={this.handleSubmit} >
                    <input type="file" 
                    onChange={this.handleFile}
                    name="" id=""
                    />
                    <h3>Image Preview</h3>
                    {preview}
                </form>
            </div>
        )
    }
}

export default Settings;
