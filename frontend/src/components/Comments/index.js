import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { createCommentThunk, getAllComments, updateCommentThunk, deleteCommentThunk, getComment } from "../../store/comment";
import * as sessionActions from "../../store/uploadPhoto"

export default function Comments() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const comments = useSelector(state => state.comment)
    const [comment, setComment] = useState('');
    


    const onSubmit = (e) => {
        e.preventDefault();
        const userId = sessionUser.id;
        dispatch(createCommentThunk({userId, photoId: id, comment }))
        window.location.reload()
    }

    const handleDeleteClick = (id) => {
        dispatch(deleteCommentThunk(id))
    }
    useEffect(() => {
        dispatch(getAllComments(id))
    }, [dispatch,])
    

    return (
        <div className='comment-container'>
            <form onSubmit={onSubmit}>
                <input type='text' value={comment} onChange={e => setComment(e.target.value)} placeholder='Comment Here!'/>
                <button className="button" type="submit"> Post a comment </button>
            </form>
                <div className='comments'>
                    {comments && 
                        comments.map(comment => (
                            <div key={comment?.id} className='single-comment'>
                                {comment.userId} {comment.comment}
                                <button className="delete-btn" onClick={() => handleDeleteClick(comment?.id)}>Delete</button>
                            </div>    
                        ))}
                </div>
        </div>

    )
}
