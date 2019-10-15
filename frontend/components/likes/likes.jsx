import React from 'react';

class Likes extends React.Component{
    constructor(props){
        super(props);

        this.state = ({ liked: this.props.likedStatus })
        // debugger
        this.toggleLike = this.toggleLike.bind(this);
    }
 
    //need to dispatch change in receivelikes

    toggleLike(){
        // let likedStatus = this.state.liked;
        if (this.state.liked){
            // this.props.deleteLike(this.props.photo.id, this.props.currentUser.id)
            this.props.deleteLike(this.props.photo.id)
        } else {
            this.props.createLike(this.props.photo.id)
        }
        this.setState({liked: !this.props.likedStatus});
    }

    render(){
        return(
            <div className={this.state.liked ? "like-button active" : "like-button"} onClick={this.toggleLike}>
                <i className="far fa-heart"></i>
                {this.props.photo.liker_ids.length}
            </div>
        )

    }   
}

export default Likes;