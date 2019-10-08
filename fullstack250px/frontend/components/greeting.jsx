import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    // debugger;
    if (!props.currentUser){
        return(
            <section className="header">
                <div className="nav">
                    <i className="fas fa-search">

                    <input className="search" type="text" placeholder="Search 250px"/>
                    </i>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                </div>
            </section>
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