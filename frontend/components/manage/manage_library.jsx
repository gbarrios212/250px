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