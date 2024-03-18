import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState: {
    idCount: 3,
    tasks: [
      { id: 1, title: 'TASK A', completed: false },
      { id: 2, title: 'TASK B', completed: false },
      { id: 3, title: 'TASK B', completed: false },
    ],
  },
  reducers: {
    newTask: (state, action) => {
      state.idCount += 1;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deletetask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id == action.payload.id);
    },
  },
});

export const { newTask, completeTas, deletetask } = taskSlice.actions;

export const selecttasks = (state) => state.task.tasks;

export default taskSlice.reducer;
