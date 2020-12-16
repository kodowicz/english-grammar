import { combineReducers } from "redux";

const taskState = {
  isAnswered: "",
  taskChecked: false,
  taskCompleted: false
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

    case "COMPLETE_TASK":
      return {
        ...state,
        taskCompleted: action.payload
      };

    default:
      return state;
  }
}
export default combineReducers({
  task: taskReducer
});
