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
    }

    update(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        } 
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    
    render() {
        const header = this.props.formType === "signup" ? (
            <h3>Sign Up</h3>) : ( <h3>Log In</h3> );
        const sessionLink = this.props.formType === "signup" ? (
            <Link to="/login">Log In</Link>
            ) : ( <Link to="/signup">Sign Up</Link> );
        
        const errorsList = (this.props.errors) ? ( 
            this.props.errors.map((error, index) => (
            <li key={index}>{error}</li>
        ))) : (
            <div></div>
        );
        
        return (<div className="session-form">
            {header}
            {sessionLink}
            <ul>{errorsList}</ul>
            <form>
                <label> Username:
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                    />
                </label>
                <br/>
                <label> Email:
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                    />
                </label>
                <br/>
                <label> Password:
                    <input
                        type="text"
                        value={this.state.password}
                        onChange={this.update("password")}
                    />
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>)
    }
}

export default SessionForm;