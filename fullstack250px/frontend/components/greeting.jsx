import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    // debugger;
    if (!props.currentUser){
        return(
            <div className="greeting">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        )
    } else {
        return(
            <div className="greeting">
                <h1>Well check you out, {props.currentUser.username}!</h1>
                <button onClick={props.logout}>Log Out</button>
            </div>
        )
    }
}

export default Greeting;