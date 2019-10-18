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

      this.handleSubmit = this.handleSubmit.bind(this);
      this.demoLogin = this.demoLogin.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    update(...types) {
        return (e) => {
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

        return (<div className="session-form"> 
            <form className="form">
            {header}
            
            {errorsList}
            <br/>
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
                
                <button className="form-submit" onClick={this.handleSubmit}>{this.props.formType}</button>
                <div className="guest-login">
                    <button className="guest-button" 
                        onClick={this.demoLogin}>guest</button>
                    </div>
                <div className="alt-form-link">{sessionLink}</div>
            </form>
        </div>)
    }
}

export default SessionForm;