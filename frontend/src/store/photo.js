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

// export const getAllPhotos = () => async(dispatch) => {
//     const allPhotos = await csrfFetch(`/api/photo`)
//     const photos = await allPhotos.json()
//     if( allPhotos.ok ) {
//         dispatch(getPhotos(photos))
//     }
// }

export const  getAllPhotos = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/photo/${id}`)

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
            const allPhotos = {...state}
            action.photos.forEach(photo => {
                allPhotos[photo.id] = photo
            });
            return allPhotos;
        default:
            return state;
    }
} 

export default photosReducer