import React from 'react';

class Settings extends React.Component{
    constructor(props){
        super(props)

        let newUserProps = Object.assign({}, this.props.currentUser, {profilePicture: null, profilePictureUrl: null});
        this.state = newUserProps;
        
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        let keys = Object.keys(this.state)
        debugger;
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
        }).then((response) => this.props.updateUser(response),
            (response) => this.props.receiveUserErrors(response.responseJSON));
    }

    handleFile(e) {
        debugger;
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({profilePicture: file, profilePictureUrl: fileReader.result});
        };
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }


    render (){
        const errorsList = (this.props.errors) ? ( 
            this.props.errors.map((error, index) => (
            <li className="errors" key={index}>{error}</li>
        ))) : (
            <div></div>
        );

        const preview = this.state.profilePictureUrl ? <img className="preview" src={this.state.profilePictureUrl} /> : null;
        return(
            <div className="settings-container">
                
                <form className="user-update-form"  onSubmit={this.handleSubmit} >
                    {errorsList}
                    
                    <div className="inputs">

                        <div className="profile-info">
                            <div className="profile-title">
                                <span>
                                    Profile
                                </span>
                            </div>
                            <div className="avatar-container">
                                <div className="avatar-preview">
                                    {preview}
                                </div>
                                <label for="files">Upload</label>
                                <input 
                                    className="hidden"
                                    type="file" 
                                    onChange={this.handleFile}
                                    name="" 
                                    id="file"
                                    />
                                <h3>Image Preview</h3>
                            </div>


                            <label htmlFor="bio">Bio</label>
                            <input id="bio" type="text" onChange={this.update("bio")} value={this.state.bio}/>
                            <label htmlFor="gender">Gender</label>
                            <input id="gender" type="text" onChange={this.update("gender")} value={this.state.gender}/>                   
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" onChange={this.update("city")} value={this.state.city}/>
                            <label htmlFor="state">State</label>
                            <input id="state" type="text" onChange={this.update("state")} value={this.state.state}/>
                            <label htmlFor="country">Country</label>
                            <input id="country" type="text" onChange={this.update("country")} value={this.state.country}/>
                            <label htmlFor="cameras">Cameras</label>
                            <input id="cameras" type="text" onChange={this.update("cameras")} value={this.state.cameras}/>
                            <label htmlFor="lenses">Lenses</label>
                            <input id="lenses" type="text" onChange={this.update("lenses")} value={this.state.lenses}/>
                        </div>

                        <div className="personal-info">
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" onChange={this.update("username")} value={this.state.username}/>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" onChange={this.update("email")} value={this.state.email}/>
                            <label htmlFor="first_name">First Name</label>
                            <input id="first_name" type="text" onChange={this.update("first_name")} value={this.state.first_name}/>
                            <label htmlFor="last_name">Last_Name</label>
                            <input id="last_name" type="text" onChange={this.update("last_name")} value={this.state.last_name}/>
                            <label htmlFor="birthday">Birthday</label>
                            <input id="birthday" type="text" onChange={this.update("birthday")} value={this.state.birthday}/>
                        </div>

                    </div>
                    <button className="save-user-changes-button">Save Changes</button>
                </form>
            </div>
        )
    }
}

export default Settings;
