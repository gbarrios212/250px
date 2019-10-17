import React from 'react';
import { Link } from 'react-router-dom';

class CommentsIndexItem extends React.Component{
    constructor(props){
        super(props);
        debugger;
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    confirmDelete(e){
        e.preventDefault();
        let result = confirm("Are you certain?");
        if (result){
          this.props.deleteComment(this.props.comment.id);
        }
    }
 
    render(){

        let editOptions;
        if(this.props.currentUser){
            editOptions = this.props.currentUser.id === this.props.comment.author_id ? (
            // editOptions = this.props.currentUser.id === this.props.photo.author_id ? ( this makes comments die for some reason
                <button className="delete-comment" onClick={this.confirmDelete}>Delete</button>
                    ) : <div></div>
            
        }

        // debugger;
            
        return(
            <li className="comment-item">
                <div className="commenter-avatar-container">
                    <Link to={`/users/${this.props.comment.author_id}`}>
                        <img className="commenter-avatar" src={this.props.comment.author.profilePictureUrl}/>
                    </Link>
                </div>
                <div className="comment-details">
                    {/* {this.props.comment.author.username} */}
                    <div className="comment-details-header">
                        <h2>
                            <Link to={`/users/${this.props.comment.author_id}`} className="comment-author-name">
                                {this.props.comment.author.username}
                            </Link>
                        </h2>
                        {/* <p>TIME HERE</p>
                        {this.props.comment.created_at} */}
                    </div>

                    <div className="comment-body">
                        {this.props.comment.body}
                    </div>
                    <div className="comment-details-footer">
                        {editOptions}
                    </div>
                </div>
            </li>
        );
    }
}

export default CommentsIndexItem;

