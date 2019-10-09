import React from 'react';
import { Link, Route } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass(e) {
        e.preventDefault();
        const currentState = this.state.show;
        this.setState({ show: !currentState });
    }

    render(){
        const logo = (
            <div className="logo">
                <Link to="/">250px</Link>
            </div>
        )

        if (!this.props.currentUser){
            return(
            <div>

                <section className="header">
                    {logo}
                    <div className="nav">
                        <i className="fas fa-search"></i>
                        <input className="search" type="text" placeholder="Search 250px"/> 
                        <Link to="/login">Log In</Link>
                        <span className="signup-styling">
                            <Link to="/signup">Sign Up</Link>
                        </span>
                    </div>
                </section>

                {/* <div className="splash-signup">
                    <button>
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </div> */}
            </div>
            )
        } else {
            return(
                <div>
                    <section className="header">
                        {logo}
                        <div className="nav">
                            <i className="fas fa-search"></i>
                            <input className="search" type="text" placeholder="Search 250px"/>
                            <div className="dropdown">
                                <button onClick={this.toggleClass} className="dropbtn">
                                    <i className="fas fa-user-circle"></i>
                                </button>
                                <div id="myDropdown" className={this.state.show ? 'dropdown-content show' : 'dropdown-content'}>
                                    <button className="logout" onClick={this.props.logout}>Log Out</button>
                                    {/* <a href="#">Link 2</a>
                                    <a href="#">Link 3</a> */}
                                </div>
                            </div>
                            <i className="fas fa-plus"></i>    
                        </div>
                    </section>
                            
                    <div className="greeting">
                        <h1>Well check you out, {this.props.currentUser.username}!</h1>  
                    </div>
                </div>
            )
        }
    }
}

export default Navbar;