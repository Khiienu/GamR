import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'
import './photo.css'
import image from '../../images/image-1.JPG'


export default function Photo() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const photos = useSelector(state => Object.values(state.photo));
    const { id } = useParams();

    console.log(photos)
    
    useEffect(() => {
        dispatch(getAllPhotos())
    }, [dispatch])
    if(!photos) {
        return null;
    }
    return (
        <div className="single-container">
            <img src={image}/>
            {photos.map((photo) => (
                <div>
                    <img src={`/images/${photo.picture}`}/>
                </div>
            ))}
        </div>
    )
}