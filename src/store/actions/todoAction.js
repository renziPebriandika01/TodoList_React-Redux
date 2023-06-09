
import * as actionTypes from './actionTypes'

export const editTodo = (payload) => ({
    type: actionTypes.EDIT_TODO,
    payload: payload
  })
  
  export const deleteTodo = (index) => ({
    type: actionTypes.DELETE_TODO,
    payload: index
  })
  export const addTodo = (todo) => ({ 
    type:actionTypes.ADD_TODO,
     payload: todo 
})