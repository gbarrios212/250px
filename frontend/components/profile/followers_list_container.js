import FollowersList from './followers_list';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {

}

const mdp = (dispatch) => {
    closeModal: () => dispatch(closeModal())
}