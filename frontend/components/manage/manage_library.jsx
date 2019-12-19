import React from 'react';
import ManageLibraryDetail from './manage_library_detail';

class ManageLibrary extends React.Component{
    constructor(props){
        super(props)
        this.state = { selected: false };
        this.updateActivePhotoId = this.updateActivePhotoId.bind(this);
    }

    updateActivePhotoId(e) {
        this.props.receiveActivePhotoId(e.currentTarget.value);
        this.setState({ selected: true });
        e.currentTarget.classList.toggle("selected")
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        if (this.props.photos.length === 0){
            return (
                <div className="library-grid">
                </div>
            );
        }

        if (!this.props.photos[0]){
            return <div>Loading</div>
        }

        let photosList = this.props.photos.map(photo => {
            return (
                <li 
                    key={photo.id} onClick={this.updateActivePhotoId} 
                    className={photo.id === this.props.activePhotoId ? "thumbnail selected" : "thumbnail"} 
                    value={photo.id}>
                    <ManageLibraryDetail photo={photo} key={photo.id}
                    />
                </li>
            )
        });

        return(
            <div className="library-grid">
                {photosList}
            </div>
        )
    }
}

export default ManageLibrary;