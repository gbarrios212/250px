import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';
import commentsReducer from './comments_reducer';
import alertsReducer from './alerts_reducer';

export default combineReducers({
    users: usersReducer,
    photos: photosReducer,
    comments: commentsReducer,
    alerts: alertsReducer
})

//export default entitiesReducer;