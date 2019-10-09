import React from 'react';
import { Link, Route } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let splashSignup;
        debugger;
        if (!this.props.currentUser){
            splashSignup = <Link to="/signup" className="splash-signup">Sign Up</Link>
        } else {
            splashSignup = <div></div>
        }
        debugger;
        return (
            <div>
                {splashSignup}
            </div>
        );
    }
}
    
export default Splash;
