import Settings from './settings';
import { connect } from 'react-redux';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    
})

export default connect(msp, mdp)(Settings);