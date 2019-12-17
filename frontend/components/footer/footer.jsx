import React from 'react';

class Footer extends React.Component {

    render(){
        return (
            <div className="footer-container-outer">
                <div className="footer-container-inner">
                    <div>Created by Gabriel Barrios</div>
                    <a href="https://github.com/gbarrios212" className="devLink"><i className="fab fa-github devLink"> GitHub</i></a>
                    <a href="https://www.linkedin.com/in/gabriel-antonio-barrios" className="devLink"><i className="fab fa-linkedin devLink"> LinkedIn</i></a>
                    <a href="https://angel.co/gabriel-barrios-2" class="devLink"><i class="fab fa-angellist devLink"></i>    AngelList</a>
                    <a href="https://gbarrios.com/" class="devLink"><img src="app/assets/images/G.svg" class="gb" />    Portfolio</a>
                </div>
            </div>
    )
}

}

export default Footer;