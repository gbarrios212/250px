import {
  RECEIVE_SUCCESS,
  CLEAR_SUCCESS
} from "../actions/alert_actions";

const alertsReducer = (oldState = "", action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SUCCESS:
      return action.message;
    case CLEAR_SUCCESS:
      return "";
    default:
      return oldState;
  }
};

export default alertsReducer;
