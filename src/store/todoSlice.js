import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // reducers (actions, i guess) are function that allow us to make changes in store
    // syntax of a reducer
    // we will always get an acces of state and action
    // reducerName: (state, action) => {body of reducer}
    // state gives the current state/values of a variable.
    // action allow us to pass value to reducer at the time of function callds
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
