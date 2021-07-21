import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'
import * as sessionActions from "../../store/uploadPhoto"

export default function SingleImage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const photos = useSelector((state) => state.photo);
    const [caption, setCaption] = useState('')


    useEffect(() => {
        if(photos[id] !== undefined){
            console.log(photos)
            setCaption(photos[id].caption)
        }
    }, [photos, id])

    useEffect(() => {
        dispatch(getAllPhotos())
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(sessionActions.updatePhoto({id : photos[id].id, caption}))
    }

return ( 
    <div className="image-container">
        <h1>This is a test for single photo</h1>
        {photos[id] !== undefined && (
            <>
            <img className="single-photo" src={photos[id].picture} />
            <div className="photo-caption">{photos[id].caption}</div>
            </>
        )}
        {photos[id] !== undefined && sessionUser.id === photos[id].userId && (
            <>    
             <button>Edit Caption</button>
             <form onSubmit={onSubmit} className="upload-form">
             <div className="input-field">
                 <span></span>
             </div>
                <textarea name="caption" type='text' value={caption} onChange={e => setCaption(e.target.value)} required rows="2" cols="20" />
    
             <button className="button" type="submit" > Edit post</button>
             </form>
             </>
        )}
    </div>

)
}