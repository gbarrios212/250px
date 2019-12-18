import PhotosIndexItem from "./photos_index_item";
import { connect } from "react-redux";

const msp = (state, ownProps) => {
    let user;
    let author;
    let authorPic;
    let authorId;
    if (state.entities.users[ownProps.photo.author_id]) {
        user = state.entities.users[ownProps.photo.author_id];
        author = user.username;
        authorPic = user.profilePictureUrl;
        authorId = user.id;
    }
    return({
        author,
        authorPic,
        authorId
    })
}

export default connect(msp)(PhotosIndexItem)
