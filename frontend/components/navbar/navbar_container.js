import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    message: state.entities.alerts
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout())

})

export default connect(msp, mdp)(Navbar);