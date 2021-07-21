import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/uploadPhoto"
import { useHistory, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

function EditImage({post}) {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState(post.caption)
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(sessionActions.updatePhoto({ id: post.id, caption}))
    }
    return (
        <div className="edit-photo-container">
        <div className="title-container">
            <h2>Edit this caption!</h2>
        </div>
        <form onSubmit={onSubmit} className="upload-form">
            <div className="input-field">
                <span></span>
            </div>
                <textarea type='text' value={caption} onChange={e => setCaption(e.target.value)} required rows="2" cols="20" />

            <button className="button" type="submit" > Edit post</button>
        </form>
        </div>
    )
}

export default EditImage