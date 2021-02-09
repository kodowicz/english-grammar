import { combineReducers } from "redux";

const taskState = {
  isAnswered: "",
  taskChecked: false,
  taskCompleted: false
};

const themeState = {
  isLight: false
}

const themeReducer = (state = themeState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        isLight: action.payload
      };

    default:
      return state;
  }
}


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
  task: taskReducer,
  theme: themeReducer
});
