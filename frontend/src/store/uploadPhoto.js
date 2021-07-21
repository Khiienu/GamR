import { csrfFetch } from "./csrf";

const POST_PHOTO = 'upload/POST_PHOTO'
const GET_PHOTO = 'upload/GET_PHOTO'
const DELETE_PHOTO = 'upload/DELETE_PHOTO'

const getPhoto= (photos) => {
    return {
        type: GET_PHOTO,
        photos
    }
}

const postPhoto = (photo) => {
    return {
        type: POST_PHOTO,
        photo
    }
}

const delPhoto = (id) => {
    return {
        type: DELETE_PHOTO,
        id
    }
}

export const getPhotos = () => async (dispatch) => {
    const res = await fetch('/api/upload')

    if(res.ok) {
        const photos = await res.json()
        dispatch(getPhoto(photos))
    }
}

export const uploadPhoto = (payload) => async (dispatch) => {
    const res =  await csrfFetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify(payload),
    })
    if(res.ok) {
        const newPhoto = await res.json();

        dispatch(postPhoto(newPhoto))
    }
} 

export const deletePhoto = (id) => async (dispatch) => {
    const res = await csrfFetch('/api/upload', {
        method: 'DELETE',
        body: JSON.stringify({id})
    })
    await res.json()
    dispatch(delPhoto(id))
    return res 
}

export const updatePhoto = (photo) => async (dispatch) => {
    const res = await csrfFetch('/api/upload', {
        method: 'PATCH',
        body: JSON.stringify(photo)
    })
    const data = await res.json()
    dispatch(postPhoto(data))
    return data
}

const initialState = {}

const photoReducer = (state = initialState, action ) => {
    let newState = {};

    switch (action.type) {
        case GET_PHOTO:
            action.photos.forEach((photo) => {
                newState[photo.id] = photo
            });
            return { ...state, ...newState }
        case POST_PHOTO:
            newState = {
                ...state,
                [action.photo.id]: action.photo
            }
            return newState
        case DELETE_PHOTO:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default photoReducer;