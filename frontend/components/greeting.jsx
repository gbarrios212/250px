import React from 'react';
import { Link, Route } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        };

        this.toggleClass = this.toggleClass.bind(this)
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ show: !currentState });
      }

      render(){

          if (!this.props.currentUser){
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
                    </div>
{/*                      
    <i className="fas fa-user-circle">
    
    <ul className="dropdown">
    <li><button onClick={props.logout}>Log Out</button></li>
    </ul>
</i> */}


                    <div class="dropdown">
                        <button onClick={this.toggleClass} class="dropbtn"><i className="fas fa-user-circle"></i></button>
                    {/* <div id="myDropdown" className="dropdown-content"> */}
                        {/* <div id="myDropdown" className={this.state.show ? 'dropdown-content show' : 'dropdown-content'>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div> */}
                {/* </div> */}




                {/* <Route path="/manage/upload" component={render (somtething-dropdownComponent)}></Route> */}
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

export default Greeting;