import React from 'react';
import { Link } from 'react-router-dom';

class Manage extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        // let splashSignup;
        // if (!this.props.currentUser){
        //     splashSignup = <Link to="/signup" className="splash-signup">Sign Up</Link>
        // } else {
        //     manageIndex = <div></div>
        // }
        return (
            <div>hi
                {this.props.otherForm}
            </div>
        );
    }
}
    
export default Manage;
