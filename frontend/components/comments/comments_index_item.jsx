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
                <button onClick={this.confirmDelete}>Delete</button>
                    ) : <div></div>
            
        }

        debugger;
            
        return(
            <li className="comment-item">
                {this.props.comment.author.username}
                {this.props.comment.body}
                {editOptions}
            </li>
        );
    }
}

export default CommentsIndexItem;

