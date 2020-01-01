import React from "react";
import { Link } from "react-router-dom";

class FollowsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let followingList;
    if (this.props.followings) {
      if (this.props.followings.length !== 0) {
        followingList = this.props.followings.map(following => {
          return (
            <li className="following-item">
              <div className="following-avatar-container">
                <img
                  src={following.profilePictureUrl}
                  className="following-avatar"
                ></img>
              </div>
              <Link
                to={`/users/${following.id}`}
                onClick={() => this.props.closeModal()}
              >
                <div className="following-name">{following.username}</div>
              </Link>
            </li>
          );
        });
      } else {
        followingList = (
          <div className="no-followings">
            This user is not following anyone.
          </div>
        );
      }
    }
    return <div className="followings-list">{followingList}</div>;
  }
}

export default FollowsList;
