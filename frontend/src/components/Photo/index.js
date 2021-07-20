import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'
import './photo.css'


export default function Photo() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const photos = useSelector(state => state.photos);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllPhotos())
    }, [dispatch])
    return (
        <div className="single-container">
            {photos.map((photo) => (
                <div>{photo.picture}</div>
            ))}
        </div>
    )
}