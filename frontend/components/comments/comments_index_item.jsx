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
                <button className="delete" onClick={this.confirmDelete}>Delete</button>
                    ) : <div></div>
            
        }

        // debugger;
            
        return(
            <li className="comment-item">
                <div className="commenter-avatar-container">
                    <img className="commenter-avatar" src={this.props.comment.author.profilePictureUrl}/>
                </div>
                <div className="comment-details">
                    {/* {this.props.comment.author.username} */}
                    <div className="comment-details-header">
                        <h2>
                            <Link to={`/users/${this.props.comment.author_id}`}>
                                {this.props.comment.author.username}
                            </Link>
                        </h2>
                        <p>TIME HERE</p>
                    </div>

                    {this.props.comment.body}
                    <div className="comment-details-footer">
                        {editOptions}
                        <ul className="comment-dropdown">
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}

export default CommentsIndexItem;

