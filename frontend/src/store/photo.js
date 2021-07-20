import { csrfFetch } from './csrf';
const GET_PHOTOS = 'photos/GET_PHOTOS';

//action_creator
const getPhotos = (photos) => {
    return {
        type: GET_PHOTOS,
        photos
    }
}

//Thunk


export const  getAllPhotos = () => async (dispatch) => {
    const res = await csrfFetch(`/api/photos`)

    if( res.ok ){
        const photo = await res.json()
        dispatch(getPhotos(photo))
        return photo
    }
}


//Reducer
 const initialState = {};
const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
            const allPhotos = {}
            console.log(action.photos.picture)
            action.photos.picture.forEach(photo => {
                allPhotos[photo.id] = photo
            });
            return {
                ...state,
                ...allPhotos
            };
        default:
            return state;
    }
} 

export default photosReducer