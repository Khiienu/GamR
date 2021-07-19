import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import './photo.css'

export default function Photo() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const { id } = useParams();
    // const makeOtherId = other.id








    return (
        <div className="single-container">
            <img className='picture'/>
            <div className='image-caption'></div>
        </div>
    )
}