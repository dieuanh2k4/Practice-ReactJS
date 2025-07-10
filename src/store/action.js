import { SET_TODO_INPUT } from "./const";
import { ADD_TODO } from "./const";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
