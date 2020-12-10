import { combineReducers } from "redux";

const taskState = {
  userAnswer: ""
};

const taskReducer = (state = taskState, action) => {
  switch (action.type) {
    case "CHECK_SOLUTION":
      return {
        ...state,
        userAnswer: action.payload
      };
      
    default:
      return state;
  }
}
export default combineReducers({
  task: taskReducer
});
