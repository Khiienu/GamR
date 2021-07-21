import './UploadImage.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as uploadActions from "../../store/upload";
import * as sessionActions from '../../store/session';
import { useHistory, Link } from 'react-router-dom';

function Upload() {
    const dispatch = useDispatch()
    const [picture, setPictureUrl] = useState('')
    const [caption, setCaption] = useState('')
    const [albumId, setAlbumId] = useState('')
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        let userId = sessionUser.id;
        return dispatch(uploadActions.uploadPhoto({picture, userId, caption, albumId}))
    }
}
    return (
        <div className="form_container">
        <div className="title_container">
          <h2>Upload An Image!</h2>
        </div>
        <form onSubmit={onSubmit} className='upload-form'>
            <div className="input_field"> <span><i aria-hidden="true" className=""></i></span>

                <input
                    className='form-input-url'
                    type='text'
                    value={imageUrl}
                    onChange={e => setPictureUrl(e.target.value)}
                    placeholder="Image Url"
                    required
                />
            </div>
                 <div className="input_field"> <span><i aria-hidden="true" className="album"></i></span>

                <input
                    className='form-input-url'
                    type='text'
                    value={albumId}
                    onChange={e => setAlbumId(e.target.value)}
                    placeholder="Where should I save this?"
                />
            </div>
            <div className="input_field"> <span><i aria-hidden="true" className="caption"></i></span>

                <textarea
                    type='text'
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                    required
                    placeholder='Caption your image!'
                    rows="4"
                    cols="30"
                />
            </div>
            <button className="button" type="submit" >Upload Post</button>
            </form>
            </div>
    )
