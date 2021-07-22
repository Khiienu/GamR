import { getJSON } from "js-cookie";
import { csrfFetch } from "./csrf";

const POST_COMMENT = 'comment/POST_COMMENT';
const GET_COMMENT = 'comment/GET_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT';

export const postComment = (comment) => ({
    type: POST_COMMENT,
    comment
})

export const getComment = (comment) => ({
    type: GET_COMMENT,
    comment
})

export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    id
})

export const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment
})

//create comment 

export const createCommentThunk = payload => async(dispatch) => {
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    const newComment = await res.json();
    dispatch(postComment(newComment))
    return newComment
}

//get comments 

export const getAllComments = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`)

    if(res.ok) {
        const allComments = await res.json();
        dispatch(getComment(allComments))
        return allComments
    }
}

//edit comment

export const updateCommentThunk = (id, comment) => async(dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify({id, comment})
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(updateComment(data))
    }
}

//delete comment 

export const deleteCommentThunk = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE'
    })
    if(res.ok) {
        await res.json()
        dispatch(deleteComment(id))
        return res
    }
}

const initialState = {}

const commentReducer = (state = initialState, action) => {
    const newState = {}
    switch (action.type) {
        case POST_COMMENT:
            newState ={
                ...state,
                [action.comment.id]: action.comment 
            }
            return newState
        case GET_COMMENT:
            action.comment.forEach(comt => {
                newState[comt.id] = comt;
            })
            return {...newState}
        case DELETE_COMMENT:
            newState = { ...state}
            delete newState[action.id]
            return newState
        case UPDATE_COMMENT:
            newState[action.comment.id] = action.comment
            return {
                ...newState
            }
            default:
                return state;
    }
}

export default commentReducer