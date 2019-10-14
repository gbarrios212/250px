import React from 'react';
import ManageLibraryDetail from './manage_library_detail';

class ManageLibrary extends React.Component{
    constructor(props){
        // debugger;
        super(props)
        this.state = { selected: false };
        this.toggleSelect = this.toggleSelect.bind(this);
    }

    toggleSelect(e) {
        // const currentSelect = this.state.selected;
        // this.setState({ selected: !currentSelect });
        if (!this.state.selected){
            e.target.classList.toggle("selected")
            let selectedStatus = this.state.selected;
            this.setState({selected: !selectedStatus })
        } else {

        }
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

        if (!this.props.photos){
            return <div>Loading</div>
        }

        // debugger;
        let photosList = this.props.photos.map(photo => {
            return <li key={photo.id} onClick={this.toggleSelect} className="thumbnail">
                <ManageLibraryDetail photo={photo} key={photo.id}/>
            </li>
        })
        return(
            <div className="library-grid">
                {photosList}
            </div>
        )
    }
}

export default ManageLibrary;