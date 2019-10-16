import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    users: usersReducer,
    errors: errorsReducer,
    ui: uiReducer
})
