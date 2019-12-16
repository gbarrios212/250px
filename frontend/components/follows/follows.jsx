import React from 'react';

class Follows extends React.Component{
    constructor(props){
        super(props);
        this.state = ({ followed: this.props.followedStatus })
        this.toggleFollow = this.toggleFollow.bind(this);
    }

    toggleFollow(e){
        e.preventDefault();
        if (this.state.followed){
            this.props.deleteFollow(this.props.otherUser.id);
        } else {
            this.props.createFollow(this.props.otherUser.id);
        }
        this.setState({followed: !this.state.followed});
    }

    render(){
        let followed;
        followed = this.props.followedStatus ? 
            <div className="unfollow-button">
                Unfollow
            </div> : 
            <div className="follow-button">
                Follow
            </div>
                
        return(
            // <button className={this.state.followed ? "follow-button active" : "follow-button"} onClick={this.toggleFollow}>
            <button onClick={this.toggleFollow}>
                {followed}
            </button>
        )

    }   
}

export default Follows;