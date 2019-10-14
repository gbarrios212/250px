import React from 'react';

const CommentsIndexItem = ({comment}) => {
    // debugger;
    return(
        <li className="comment-item">
            {comment.author_id}
            {comment.body}
        </li>
    );
}

export default CommentsIndexItem;