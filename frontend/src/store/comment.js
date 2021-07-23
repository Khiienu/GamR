import { getJSON } from "js-cookie";
import { csrfFetch } from "./csrf";

const POST_COMMENT = 'comment/POST_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT';
const EVERY_COMMENT = 'comment/EVERY_COMMENT';

const postComment = (comment) => ({
    type: POST_COMMENT,
    comment
})

// export const getComment = (comments) => ({
//     type: GET_COMMENT,
//     comments
// })

const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    id
})

const updateComment = (comment ) => ({
    type: UPDATE_COMMENT,
    comment
})
const everyComment = (comments) => ({
    type: EVERY_COMMENT,
    comments
}) 

//create comment 

export const createCommentThunk = payload => async(dispatch) => {
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    const newComment = await res.json();
    dispatch(postComment(newComment))
    console.log(newComment);
    return newComment
}




export const everyCommentThunk = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/comments/pic/${id}`)
    if(res.ok) {
        const allComments = await res.json()
        dispatch(everyComment(allComments))
    }
}
//edit comment

export const updateCommentThunk = ({commentId, comment}) => async(dispatch) => {
    // const {id, comment} = comment;
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({comment})
    })
        const data = await res.json();

        dispatch(updateComment(data))
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
    let newState = {}
    switch (action.type) {
        case POST_COMMENT:
            newState ={
                ...state,
                [action.comment.id]: action.comment 
            }
            return newState
    
        case EVERY_COMMENT:
            const allComments = {}
            action.comments.forEach(comt => {
                allComments[comt.id] = comt;
            })
            return {
                ...newState,
                ...allComments
            }

        case DELETE_COMMENT:
            newState = { ...state}
            delete newState[action.id]
            return newState


        case UPDATE_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
            default:
                return state;
        
    }
}

export default commentReducer