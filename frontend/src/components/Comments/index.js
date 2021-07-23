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
    const [editComment, setEditComment ] = useState('');
    


    const onSubmit = async(e) => {
        e.preventDefault();
        const userId = sessionUser.id;
        await dispatch(createCommentThunk({userId, photoId: id, comment }))
        await dispatch(getAllComments(id))
        await dispatch(updateCommentThunk({editComment, id: comment.id}))
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
                {comments !== undefined  && 
                    Object.values(comments).map(comment => (
                        <div key={comment?.id} className='single-comment'>
                            {comment.userId} {comment.comment}
                            {sessionUser !== undefined && sessionUser.id === comment.userId && (
                                <div className="user-comment-option" >
                                <button className="del-btn" onClick={() => handleDeleteClick(comment?.id)}>delete</button>
                                <form onSubmit={updateCommentThunk} className="edit-comment">
                                    <div className="comment-change">
                                        <textarea type='text' value={editComment} onChange={e => setEditComment(e.target.value)} required rows="2" cols="20" />
                                    </div>
                                        <button className="edit-btn" type="submit">Edit Comments </button>
                                </form>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>

    )
}
