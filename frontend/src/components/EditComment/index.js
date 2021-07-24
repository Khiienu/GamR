import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import {  updateCommentThunk} from "../../store/comment";


export default function EditComment({id}) {
    const dispatch = useDispatch();
    const [comment, setComment] = useState(''); 
    
    const onSubmit =async(e) => {
        e.preventDefault();
            await dispatch(updateCommentThunk({commentId: id, comment: comment}))
        }
        
    return (
    <form onSubmit={onSubmit} className="edit-comment">
        <div className="comment-change">
            <textarea type='text' value={comment} onChange={e => setComment(e.target.value)} required rows="2" cols="20" />
        </div>
            <button className="edit-btn" type="submit">Change Comment</button>
    </form>

    )
}
