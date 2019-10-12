import React from 'react';
import ManageLibraryDetail from './manage_library_detail';

class ManageLibrary extends React.Component{
    constructor(props){
        // debugger;
        super(props)
    }

    componentDidMount() {
        // debugger;
        this.props.fetchPhotos();
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.photos !== prevProps.photos){
    //         this.props.fetchPhotos();
    //     }
    // }
    //STOP ADDING DIDUPDATE 

    render() {
        // debugger;
        let photosList = this.props.photos.map(photo => {
            return <ManageLibraryDetail photo={photo} key={photo.id}/>
        })
        return(
            <div className="library-grid">
                {photosList}
            </div>
        )
    }
}

export default ManageLibrary;