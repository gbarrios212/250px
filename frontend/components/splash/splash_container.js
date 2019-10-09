import { connect } from 'react-redux';
import Splash from './splash';


const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

export default connect(msp, null)(Splash);