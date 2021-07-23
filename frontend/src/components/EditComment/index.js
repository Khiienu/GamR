import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import {  updateCommentThunk} from "../../store/comment";


export default function EditComment() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [commentText, setCommentText] = useState(''); 
    
    const onSubmitTwo =(e) => {
        e.preventDefault();
        // const updateInfo = {
            //     comment,
            //     id: comment.id
            // }
            dispatch(updateCommentThunk(commentText, id))
        }
        
    return (
    <form onSubmit={onSubmitTwo} className="edit-comment">
        <div className="comment-change">
            <textarea type='text' value={commentText} onChange={e => setCommentText(e.target.value)} required rows="2" cols="20" />
        </div>
            <button className="edit-btn" type="submit">Edit Comments </button>
    </form>

    )
}
