import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'
import './photo.css'
import { Link } from 'react-router-dom'



export default function Photo() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const photos = useSelector(state => Object.values(state.photo));
    const { id } = useParams();

    
    useEffect(() => {
        dispatch(getAllPhotos())
    }, [dispatch])
    if(!photos) {
        return null;
    }
    return (
        <div className="single-container">
            <div className="photo-wrapper" >
                {photos.map((photo) => (
                    
                    <Link to={`/photos/${photo.id}`} className="pic-wrapper">
                        <img className="pic" src={photo.picture}/>
                    </Link>
                ))}
            </div>    
        </div>
    )
}