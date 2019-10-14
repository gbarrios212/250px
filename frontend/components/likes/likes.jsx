import React from 'react';

class Likes extends React.Component{
    constructor(props){
        super(props);

        this.state = ({ liked: false })
        this.toggleLike = this.toggleLike.bind(this);
    }

    //need to dispatch change in receivelikes

    toggleLike(){
        let likedStatus = this.state.liked;
        this.setState({liked: !likedStatus});
        if (likedStatus){
            this.props.deleteLike()
        } else {
            this.props.createLike(this.props.photo.id)
        }
    }

    render(){
        return(
            <div className={this.state.liked ? "like-button active" : "like-button"} onClick={this.toggleLike}>
                <i className="far fa-heart"></i>
                {this.props.photo.like_ids.length}
            </div>
        )

    }   
}

export default Likes;