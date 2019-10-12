import React from 'react';
import { Link } from 'react-router-dom';
import PhotosIndexItem from '../photos/photos_index_item';
import ManageLibrary from './manage_library'
import PhotoEditFormContainer from '../photos/photo_edit_form_container';

class Manage extends React.Component {
    constructor(props){
        super(props)
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
                <span className="manage-grid">
                    <span className="item-a">
                        {this.props.modalSelect}
                    </span>
                    <span className="item-b">
                        <p>
                            Library
                        </p>
                    </span>
                    <span className="item-c">
                        Edit
                    </span>
                    <span className="item-d">
                        <p>
                            PHOTOS
                        </p>
                    </span>
                    {/* <ul className="library-photos">
                        {photoList}
                    </ul> */}
                        <ManageLibrary />
                    <span>
                        <PhotoEditFormContainer />
                    </span>
                </span>
            </div>
        );
    }
}
    
export default Manage;
