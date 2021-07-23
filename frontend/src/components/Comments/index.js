import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { createCommentThunk, updateCommentThunk, deleteCommentThunk} from "../../store/comment";
import * as sessionActions from "../../store/uploadPhoto"
import { everyCommentThunk } from "../../store/comment";
import EditComment from "../EditComment";
export default function Comments() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const comments = useSelector(state => state.comment)
    const [createComment, setCreateComment] = useState('');
    const userId = sessionUser.id;
   
    const onSubmit = (e) => {
        e.preventDefault();
        
        const createinfo = {
            userId,
            comment: createComment,
            photoId: id
        }
        dispatch(createCommentThunk(createinfo))
    }
    
    const handleDeleteClick = (id) => {
        dispatch(deleteCommentThunk(id))
    }
    
    useEffect(() => {
        dispatch(everyCommentThunk(id))
    }, [dispatch])

    return (
        <div className='comment-container'>
            <form onSubmit={onSubmit}>
                <input type='text' onChange={e => setCreateComment(e.target.value)} placeholder='Comment Here!'/>
                <button className="button" type="submit"> Post a comment </button>
            </form>
            <div className='comments'>
                {comments !== undefined  && 
                    Object.values(comments).map(comment => (
                        <div key={comment?.id} className='single-comment'>
                            {comment.userId} {comment.comment}
                            {sessionUser !== undefined && sessionUser.id === comment.userId && (
                                <>
                                <div className="user-comment-option" >
                                <button className="del-btn" onClick={() =>handleDeleteClick(comment?.id)}>delete</button>
                                </div>
                                <EditComment id={comment.id}/>
                                </>
                            )}
                        </div>
                    ))}
            </div>
        </div>

    )
}

//this will be the new main 
