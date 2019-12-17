import Alerts from './alerts';
import { connect } from 'react-redux';
import { clearSuccess } from '../../actions/alert_actions';

const msp = (state, ownProps) => {
    return({
        message: ownProps.message
    })
}

const mdp = (dispatch) => ({
    clearSuccess: () => dispatch(clearSuccess())
})

export default connect(msp, mdp)(Alerts);