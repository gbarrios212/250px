import React from 'react';
import { Link, Route } from 'react-router-dom';

const Greeting = (props) => {
    // debugger;
    if (!props.currentUser){
        return(
            <section className="header">
                <div className="logo">
                    250px
                </div>
                <div className="nav">
                    <i className="fas fa-search"></i>
                    <input className="search" type="text" placeholder="Search 250px"/>
                    
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                </div>
            </section>
        )
    } else {
        return(
            <div>

            <section className="header">
                <div className="logo">
                    250px
                </div>
                <div className="nav">
                    <i className="fas fa-search"></i>
                    <input className="search" type="text" placeholder="Search 250px"/>
                     
                <i className="fas fa-user-circle"></i>
                {/* <Route path="/manage/upload" component={render (somtething-dropdownComponent)}></Route> */}
                <i className="fas fa-plus"></i>
                    
                </div>
            </section>
            <div className="greeting">
                <h1>Well check you out, {props.currentUser.username}!</h1>
                <button onClick={props.logout}>Log Out</button>
            </div>
        </div>
        )
    }
}

export default Greeting;