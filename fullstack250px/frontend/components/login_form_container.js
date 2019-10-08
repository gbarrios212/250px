import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Log In'
    };
};

const mapdDspatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(login(user)),
        demoLogin: () => dispatch(login({username: "guest", password: "guest"}))
    };
};

export default connect(
    mapStateToProps,
    mapdDspatchToProps
)(SessionForm);
