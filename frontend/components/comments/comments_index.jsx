import React from 'react';
import CommentsIndexItemContainer from './comments_index_item_container';

class CommentsIndex extends React.Component{
    constructor(props){
        super(props)
        // debugger;
    }

    render(){
        // debugger;
        let commentsList = this.props.comments.map(comment => {
            return <CommentsIndexItemContainer
                comment={comment} 
                key={comment.id} 
                // photo={this.props.currentPhoto}
                // currentUser={this.props.currentUser}
            />
        })
        return(
            <div className="comment-list">
                {commentsList}
            </div>
        )
    }
}

export default CommentsIndex;

