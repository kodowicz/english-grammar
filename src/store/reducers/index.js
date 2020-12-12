import { combineReducers } from "redux";

const taskState = {
  isAnswered: "",
  taskChecked: false
};

const taskReducer = (state = taskState, action) => {
  switch (action.type) {
    case "CHECK_SOLUTION":
      return {
        ...state,
        isAnswered: true
      };

    case "CLEAN_SOLUTION":
      return {
        ...state,
        isAnswered: false
      };

    case "START_TASK":
      return {
        ...state,
        taskChecked: false
      };
    case "CHECK_TASK":
      return {
        ...state,
        taskChecked: true
      };

    default:
      return state;
  }
}
export default combineReducers({
  task: taskReducer
});
