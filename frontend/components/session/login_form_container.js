import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { fireSuccess } from "../../actions/alert_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Log In'
    };
};

const mapdDspatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(login(user)),
        demoLogin: () => dispatch(login({username: "guest", password: "guestguest"})),
        clearErrors: () => dispatch(clearErrors()),
        fireSuccess: (username) => dispatch(fireSuccess(`Welcome back, ${username}.`))
    };
};

export default connect(
    mapStateToProps,
    mapdDspatchToProps
)(SessionForm);
