import React from 'react';
import { Link, Route } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
        this.setState({ show: false });
    }

    toggleClass(e) {
        e.preventDefault();
        const currentState = this.state.show;
        this.setState({ show: !currentState });
    }

    handleLogout(){
        this.props.logout()
        .then(this.props.history.push("/"))
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
                        <span className="login-styling">
                            <Link to="/login">Log In</Link>
                        </span>
                        <span className="signup-styling">
                            <Link to="/signup">Sign Up</Link>
                        </span>
                    </div>
                </section>
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
                                    {/* <button className="logout" onClick={this.props.logout}>Log Out</button> */}
                                    <button className="logout" onClick={this.handleLogout}>Log Out</button>
                                    <Link to={`/users/${this.props.currentUser.id}`}><button className="profile">Profile</button></Link>
                                </div>
                            </div>
                            <Link to="/manage/upload">
                                <i className="fas fa-plus"></i>    
                            </Link>
                        </div>
                    </section>
                            
                    {/* <div className="greeting">
                        <h1>Well check you out, {this.props.currentUser.username}!</h1>  
                    </div> */}
                </div>
            )
        }
    }
}

export default Navbar;