import Follows from './follows';
import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../actions/follow_actions'

const msp = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    //debugger;
    let otherUser = state.entities.users.otherUsers.users[ownProps.otherUser.id];
    let followedStatus = currentUser.following_ids.includes(otherUser.id)
    return({
        currentUser,
        otherUser,
        followedStatus
    })
} 

const mdp = (dispatch) => ({
    createFollow: (userId) => dispatch(createFollow(userId)),
    deleteFollow: (userId) => dispatch(deleteFollow(userId))
})

export default connect(msp, mdp)(Follows);
