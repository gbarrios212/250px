import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//test ajax
// import { login, signup, logout } from './util/session_api_util'
// window.login = login;
// window.signup = signup;
// window.logout = logout;

//test store
// const store = configureStore();
// window.getState = store.getState;
// window.dispatch = store.dispatch;
//



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>REPLACING ROOT</h1>, root)
});