import * as actionTypes from './actionTypes'

export const addNotes = (note)=> ({
    type: actionTypes.ADD_NOTES,
    payload: note
})