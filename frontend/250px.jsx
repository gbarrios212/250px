import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//test ajax
// import { login, signup, logout } from './util/session_api_util'
// window.login = login;
// window.signup = signup;
// window.logout = logout;
// import { fetchPhotos } from './util/photo_api_util'
// window.fetchPhotos = fetchPhotos
//test store
//

// import { createComment, updateComment, deleteComment, fetchComments } from './util/comment_api_util';
// import { createLike, deleteLike } from './util/likes_api_util';

// window.createComment = createComment;
// window.updateComment = updateComment;
// window.deleteComment = deleteComment;
// window.fetchComments = fetchComments;

// window.createLike = createLike; 
// window.deleteLike = deleteLike;

// import { receiveActivePhoto, clearActivePhoto } from './actions/active_photo_actions';

// window.receiveActivePhoto = receiveActivePhoto;
// window.clearActivePhoto = clearActivePhoto;
// window.configureStore = configureStore;
// window.getState = store.getState;
// window.getState = getState;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root)
});