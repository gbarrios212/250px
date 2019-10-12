import React from 'react';
import { Link } from 'react-router-dom';
import PhotosIndexItem from '../photos/photos_index_item';

class Manage extends React.Component {
    constructor(props){
        super(props)
        debugger;

    }

    // componentDidMount() {
    //     this.props.fetchPhotos();
    // }

    render(){
        // let splashSignup;
        // if (!this.props.currentUser){
        //     splashSignup = <Link to="/signup" className="splash-signup">Sign Up</Link>
        // } else {
        //     manageIndex = <div></div>
        // }
        // let photosList = this.props.photos.map(photo => {
        //     return <PhotosIndexItem photo={photo} key={photo.id}/>
        // })
        let photoList = this.props.photos.map(photo => {
            return <PhotosIndexItem photo={photo} key={photo.id}/>
        })
        return (
            <div>
                <span className="library-photos">
                    {photoList}
                </span>
                {this.props.modalSelect}

            </div>
        );
    }
}
    
export default Manage;
