import React from 'react';
import { Link } from 'react-router-dom';

class FollowsList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let followerList;
        if (this.props.followers) {
            if (this.props.followers.length !== 0) {

                followerList = this.props.followers.map(follower => {
                    return (
                        <li className="follower-item">
                    <div className="follower-avatar-container">
                        <img src={follower.profilePictureUrl} className="follower-avatar"></img>
                    </div>
                    <Link to={`/users/${follower.id}`} onClick={() => this.props.closeModal()}>
                        <div className="follower-name">{follower.username}</div>
                    </Link>
                  </li>
                    );
                })
            } else {
                followerList = <div className="no-followers">This user does not have any followers.</div>
            }
        }
        return (
           <div className="followers-list">
               {followerList}
           </div> 
        )
    }
}

export default FollowsList;