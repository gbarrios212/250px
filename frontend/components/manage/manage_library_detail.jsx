import React from 'react';

class ManageLibraryDetail extends React.Component{
    constructor(props) {
        super(props)

        // debugger;
        // this.state={ selected: false };
        // this.toggleSelect = this.toggleSelect.bind(this);
    }


    // componentDidMount(){
    //     debugger;
    // }


    render(){
        // debugger;
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