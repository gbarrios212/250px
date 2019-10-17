import React from 'react';
import CommentEditContainer from './comment_edit_container';

class CommentsCreateForm extends React.Component{
    constructor(props){
        super(props)
        debugger;
        this.state = ({body: ""})
        debugger;
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        let comment = this.state 
        debugger
        this.setState({body: ""})
        debugger
        this.props.createComment(this.props.photoId, comment);
        debugger
        // this.setState({body: ""});
    }

    update() {
        debugger;
        return e => {
            this.setState({body: e.currentTarget.value})
        }
    }
    render() {
        debugger;
        return(  
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <textarea className="comment-input" onChange={this.update()} placeholder="Add a comment"></textarea>
                <button className="comment-submit">Comment</button>
            </form>
        )
    } 
}

export default CommentsCreateForm;