import React from 'react';
import clickLikes from './likes';



function GetComm(props){
let comment = props.comments.map(comment => {
    return <ul className="commentlist">
    <li>{comment.text}</li>
    <li className="likes"
    onClick={() => clickLikes(comment)}
    >Likes: {comment.likes}</li>
    <li>Dislikes: {comment.dislikes}</li>
    
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