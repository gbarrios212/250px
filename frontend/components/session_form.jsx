import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: "",
          email: "",
          password: ""
        };
        // debugger;

      this.handleSubmit = this.handleSubmit.bind(this);
      this.demoLogin = this.demoLogin.bind(this);
    }

    update(...types) {
        return (e) => {
            //debugger
            types.forEach(type =>{

                return this.setState({[type]: e.target.value})
            }
                )
        } 
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoLogin(e){
        e.preventDefault();
        this.props.demoLogin();
    }
    
    //mdp demoLogin
    //
    
    render() {
        const header = this.props.formType === "Sign Up" ? (
            <h3>Sign Up</h3>) : ( <h3>Log In</h3> );
        const sessionLink = this.props.formType === "Sign Up" ? (
            <Link to="/login">Log in</Link>
            ) : ( <Link to="/signup">Sign up</Link> );
        
        const errorsList = (this.props.errors) ? ( 
            this.props.errors.map((error, index) => (
            <li key={index}>{error}</li>
        ))) : (
            <div></div>
        );

        const emailField = this.props.formType === "Sign Up" ? (
            <div>
            <label htmlFor="email"> Email:</label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                        id="email"/>
                        <br/>
           
            </div>
                ) : (<div></div>)

        // const guestLink = this.props.formType === "Sign Up" ? (
        //     <div>Proceed as <Link to="/login">guest</Link></div>
        // ) : (
        //     <div className="guest-login">Proceed as <Link to="#" onClick={this.update("username", "password").bind(this)} value={"guest"}>guest</Link></div>
        // )

        return (<div className="session-form"> 
            <span className="errors-holder">
                <div className="errors">
                    <ul>{errorsList}</ul>
                </div>
            </span>
            <form className="form">
            {header}
                <label htmlFor="username"> Username:</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        id="username"/>
                <br/>

                {emailField}
                
                <label htmlFor="password"> Password:</label>
                    <input
                        type="text"
                        value={this.state.password}
                        onChange={this.update("password")}
                        id="password"
                        />
                
                <button onClick={this.handleSubmit}>{this.props.formType}</button>
                <div className="guest-login"><button onClick={this.demoLogin}>Proceed as guest</button></div>
                <div className="alt-form-link">{sessionLink}</div>
                {/* {guestLink} */}
            </form>
        </div>)
    }
}

export default SessionForm;