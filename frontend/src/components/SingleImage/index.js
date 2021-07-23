import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
// import { getAlluploadedPhoto } from '../../store/photo'
import * as sessionActions from "../../store/uploadPhoto"
import { deletePhoto } from "../../store/uploadPhoto"
import Comments from '../Comments/index.js'
import { getPhotos } from '../../store/uploadPhoto'

export default function SingleImage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const uploadedPhoto = useSelector((state) => Object.values(state.upload));
   
    const [caption, setCaption] = useState('')
    console.log(uploadedPhoto, "this is photo")
    //editing
    useEffect(() => {
        if(uploadedPhoto[id] !== undefined){
            setCaption(uploadedPhoto[id].caption)
        }
    }, [uploadedPhoto, id])
    //photo route
    useEffect(async() => {
        await dispatch(getPhotos(id))
    }, [dispatch])
    //editing
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(sessionActions.updatePhoto({id : uploadedPhoto[id].id, caption}))
        // window.location.replace(`/uploadedPhoto/${id}`)
        window.location.reload()
    }
    //deleting
    const deleteClick = () =>{
        dispatch(deletePhoto(id))
        window.location.replace("/uploadedPhoto")
    }

return ( 
    <div className="image-container">
        <h1>This is a test for single photo</h1>
        {uploadedPhoto[id] !== undefined && (
            <>
            <img className="single-photo" src={uploadedPhoto.photos.picture} />
            <div className="photo-caption">{uploadedPhoto.photos.caption}</div>
            </>
        )}
        {uploadedPhoto[id] !== undefined && sessionUser.id === uploadedPhoto[id].userId && (
            <>    
             <button>Edit Caption</button>
             <form onSubmit={onSubmit} className="upload-form">
             <div className="input-field">
                 <span></span>
             </div>
                <textarea name="caption" type='text' value={caption} onChange={e => setCaption(e.target.value)} required rows="2" cols="20" />
    
             <button className="button" type="submit"> Edit post</button>
             </form>
             </>
        )}
         {uploadedPhoto[id] !== undefined && sessionUser.id === uploadedPhoto[id].userId && (
             <>
                <div>
                <button type='button' onClick={deleteClick}>DELETE</button>
            </div>
             </>
         )}
         <Comments />
    </div>

)
}