import React from 'react';
import clickLikes from './likes';
import clickDislikes from './dislikes';
import getReplies from './replies';
import Reply from './reply'



function GetComm(props){
let comment = props.comments.map(comment => {
    return <ul className="commentlist">
    <li>{comment.text}</li>
    <li className="likes"
    onClick={() => clickLikes(comment)}
    >Likes: {comment.likes}</li>
    <li className="likes"
    onClick={() => clickDislikes(comment)}
    >Dislikes: {comment.dislikes}</li>
    <button 
    onCLick={() => Reply(comment._id)}
    >Reply</button>
    <button
    onClick={() => getReplies(comment)}
    >Replies</button>
    </ul>
    
})
    return(  
        <ul className="commentsget">
            <button 
                 onClick={() => props.getComments()}>
                 Click to view Comments
            </button> 
            <li>{comment}</li>
        </ul>
        
    )
}



export default GetComm;