import React from 'react';

class ManageLibraryDetail extends React.Component{
    constructor(props) {
        super(props)

        // this.state={ selected: false };
        // this.toggleSelect = this.toggleSelect.bind(this);
    }




    render(){
        debugger;
        return(
            // <div>
                <img 
                    // onClick={this.toggleSelect} 
                    // className={this.state.selected ? 'thumbnail selected' : 'thumbnail'} 
                    src={this.props.photo.photoUrl} alt=""> 
                </img>
            // </div>
        )
    }
    
}

export default ManageLibraryDetail;