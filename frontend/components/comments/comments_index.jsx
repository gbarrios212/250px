import React from 'react';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component{
    constructor(props){
        super(props)
        // debugger;
    }

    render(){
        debugger;
        let commentsList = this.props.comments.map(comment => {
            return <CommentsIndexItem comment={comment} key={comment.id}/>
        })
        return(
            <div className="comment-list">
                {commentsList}
            </div>
        )
    }
}

export default CommentsIndex;