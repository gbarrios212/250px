import React from 'react';
import { Link } from 'react-router-dom';
import PhotosIndexContainer from '../photos/photos_index_container';

class Splash extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let splashSignup;
        if (!this.props.currentUser){
            
            splashSignup = 
            <div className="outer-splash-container">
                <div className="splash-welcome">
                    <h1>
                        <span className="splash-welcome-header">
                            Discover and share
                            the world's best photos
                        </span>
                    </h1>
                    <h3>
                        <span className="splash-welcome-subheader">
                            Get inspired with incredible photos from diverse styles and genres 
                            around the world. We're not guided by fads—just great 
                            photography.
                        </span>
                        </h3>
                    <Link to="/signup" className="splash-signup">Sign Up</Link>
                </div>
            </div>
        } else {
            splashSignup = <div>
                <PhotosIndexContainer/>
            </div>
        }
        return (
            <div>
                {splashSignup}
            </div>
        );
    }
}
    
export default Splash;
