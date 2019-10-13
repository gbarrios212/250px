import React from 'react';

const CommentsIndexItem = ({comment}) => {
    return(
        <li className="comment-item">
            {comment.author_id}
            {comment.body}
        </li>
    );
}

export default CommentsIndexItem;