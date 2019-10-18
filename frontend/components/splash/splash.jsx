import React from 'react';
import { Link } from 'react-router-dom';
import PhotosIndexContainer from '../photos/photos_index_container';

class Splash extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let splashSignup;
        const splashStyle = {
            height: '60%',
        };
        if (!this.props.currentUser){
            
            splashSignup = 
            <div style={splashStyle} className="outer-splash-container">
                <div className="splash-welcome">
                    <h1>
                        {/* <span className="splash-welcome-header">
                            Discover and share
                            the world's best photos
                        </span> */}
                        <span className="splash-welcome-header">
                            Got a thing for birds?
                            Join the flock.
                        </span>
                    </h1>
                    <h3>
                        {/* <span className="splash-welcome-subheader">
                            Get inspired with incredible photos from diverse styles and genres 
                            around the world. We're not guided by fads—just great 
                            photography.
                        </span> */}
                        <span className="splash-welcome-subheader">
                            Get inspired with incredible bird photos from diverse styles and genres 
                            around the world. We're not guided by fads—just great 
                            chicks.
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
