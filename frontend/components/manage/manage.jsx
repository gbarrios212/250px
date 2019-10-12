import React from 'react';
import { Link } from 'react-router-dom';
import PhotosIndexItem from '../photos/photos_index_item';
import ManageLibrary from './manage_library'

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
                    <span>
                        {this.props.modalSelect}
                    </span>
                    <span>
                        library
                    </span>
                    <span>
                        Editing 
                    </span>
                    <span>list of photos</span>
                    {/* <ul className="library-photos">
                        {photoList}
                    </ul> */}
                        <ManageLibrary />
                    <span>
                        editing column 
                    </span>
                </span>
            </div>
        );
    }
}
    
export default Manage;
