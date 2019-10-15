import React from 'react';

class ProfilePhotosDetail extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
                <img 
                    src={this.props.photo.photoUrl} alt=""> 
                </img>
        )
    }
}

export default ProfilePhotosDetail;