import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let splashSignup;
        if (!this.props.currentUser){
            splashSignup = <Link to="/signup" className="splash-signup">Sign Up</Link>
        } else {
            splashSignup = <div></div>
        }
        return (
            <div>
                {splashSignup}
            </div>
        );
    }
}
    
export default Splash;
