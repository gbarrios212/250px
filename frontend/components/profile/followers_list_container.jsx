import FollowersList from './followers_list';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return ({})
}

const mdp = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(FollowersList);