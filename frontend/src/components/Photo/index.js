import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'
import './photo.css'


export default function Photo() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const pictures = useSelector(state => Object.values(state.photos));
    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllPhotos())
    }, [dispatch])
    return (
        <div className="single-container">
            {pictures.map((picture) => (
                <div>{picture.picture}</div>
            ))}
            {/* <img className='picture'/>
            <div className='image-caption'></div> */}
        </div>
    )
}