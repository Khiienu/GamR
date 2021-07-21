import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'
import * as sessionActions from "../../store/uploadPhoto"

export default function SingleImage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const photos = useSelector(state => Object.values(state.photo));
    const { id } = useParams();
    // const makeOtherId = other.id
    const photo = photos[id - 1];
    const [caption, setCaption] = useState(photo.caption)
    const history = useHistory();


    useEffect(() => {
        dispatch(getAllPhotos(id))
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(sessionActions.updatePhoto({ id: photo.id, caption}))
    }
function editForm(){
    if(sessionUser.id === photo.userId){
        return (
        <>    
        <button>Edit Caption</button>
        <form onSubmit={onSubmit} className="upload-form">
        <div className="input-field">
            <span></span>
        </div>
            <textarea type='text' value={caption} onChange={e => setCaption(e.target.value)} required rows="2" cols="20" />

        <button className="button" type="submit" > Edit post</button>
        </form>
        </>)
    }
}

return (
    <div className="image-container">
        <h1>This is a test for single photo</h1>
        <img className="single-photo" src={photo?.picture} />
        <div className="photo-caption">{photo?.caption}</div>
        {editForm()}
    </div>
)
}