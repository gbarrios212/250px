import React from 'react';
import CommentEditContainer from './comment_edit_container';

class CommentsCreateForm extends React.Component{
    constructor(props){
        super(props)
        this.state = ({body: ""})

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.props.photoId, this.state);
    }

    update() {
        return e => {
            this.setState({body: e.currentTarget.value})
        }
    }
    render() {
        return(  
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <textarea className="comment-input" onChange={this.update()} placeholder="Add a comment"></textarea>
                <button className="comment-submit">Comment</button>
            </form>
        )
    } 
}

export default CommentsCreateForm;