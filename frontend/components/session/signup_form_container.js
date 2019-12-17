import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { fireSuccess } from "../../actions/alert_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up'
    };
};

const mapdDspatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        demoLogin: () => dispatch(login({username: "guest", password: "guestguest"})),
        clearErrors: () => dispatch(clearErrors()),
        fireSuccess: (username) => dispatch(fireSuccess(`Welcome to 500chix, ${username}.`))
    };
};

export default connect(
    mapStateToProps,
    mapdDspatchToProps
)(SessionForm);