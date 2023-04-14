import { createStore, combineReducers } from "redux";
import * as actionTypes from './actions/actionTypes'

const initialStateTodos = {
  todos: []
}

const initialStateNotes = {
  notes: []
}

const todoReducer = (state = initialStateTodos, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case actionTypes.DELETE_TODO:
      let newTodos = state.todos.filter((element, index) => index !== action.payload);
      return {
        ...state,
        todos: newTodos
      }
    case actionTypes.EDIT_TODO:
      let todos = [...state.todos]
      let index = action.payload.index
      let todo = action.payload.todo
      todos[index] = todo
      return {
        ...state,
        todos
      }
    default:
      return state
  }
}

const notesReducer = (state = initialStateNotes, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTES:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
    todoReducer: todoReducer,
    notesReducer: notesReducer
  })
const store = createStore(rootReducer)

export default store
