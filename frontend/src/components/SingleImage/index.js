import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'


export default function SingleImage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const photos = useSelector(state => Object.values(state.photo));
    const { id } = useParams();
    // const makeOtherId = other.id
    const photo = photos[id - 1];
    console.log(photo)
    useEffect(() => {
        dispatch(getAllPhotos(id))
    }, [dispatch])


return (
    <div className="image-container">
        <h1>This is a test for single photo</h1>
        <img className="single-photo" src={photo?.picture} />
        <div className="photo-caption">{photo?.caption}</div>
    </div>
)
}