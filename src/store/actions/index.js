export const changeTheme = payload => ({
  type: "CHANGE_THEME",
  payload
});

export const checkSolution = () => ({
  type: "CHECK_SOLUTION"
});

export const cleanSolution = () => ({
  type: "CLEAN_SOLUTION"
});

export const checkTask = () => ({
  type: "CHECK_TASK"
});

export const startTask = () => ({
  type: "START_TASK"
});

export const completeTask = payload => ({
  type: "COMPLETE_TASK",
  payload
});
