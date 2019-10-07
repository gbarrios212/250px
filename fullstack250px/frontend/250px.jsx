import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//test ajax
// import { login, signup, logout } from './util/session_api_util'
// window.login = login;
// window.signup = signup;
// window.logout = logout;

//test store
//



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store} />, root)
});