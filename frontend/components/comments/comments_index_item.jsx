import React from 'react';

class CommentsIndexItem extends React.Component{
    constructor(props){
        super(props);

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

        debugger;
            
        return(
            <li className="comment-item">
                <div className="avatar">
                    AVA-
                    HERE
                </div>
                <div className="comment-details">
                    {/* {this.props.comment.author.username} */}
                    <div className="comment-details-header">
                        <h2>
                            {this.props.comment.author_id} LINK TO USER PROFILE HERE
                        </h2>
                        <p>TIME HERE</p>
                    </div>

                    {this.props.comment.body}
                    <div className="comment-details-footer">
                        <p>REPLY HERE</p>
                        <p>...</p>
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

