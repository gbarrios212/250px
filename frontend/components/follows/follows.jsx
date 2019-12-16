import React from 'react';

class Follows extends React.Component{
    constructor(props){
        super(props);
        this.state = ({ followed: this.props.followedStatus })
        this.toggleFollow = this.toggleFollow.bind(this);
    }

    toggleFollow(e){
        e.preventDefault();
        debugger;
        if (this.state.followed){
            this.props.deleteFollow(this.props.otherUser.id);
            // this.setState({followed: false});
        } else {
            this.props.createFollow(this.props.otherUser.id);
            // this.setState({ followed: true });
        }
        this.setState({followed: !this.state.followed});
    }

    render(){

        let followed;
        followed = this.props.otherUser.follower_ids.includes(this.props.currentUser.id) ? 
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