import React from 'react';

const getReplies = async (comment) => {
    let replies = comment.replies;
    console.log(replies);
    let reply = replies.map(reply => {
        return <ul className="commentlist">
        <li>{reply.text}</li>
     
        <li className="special">Can you see me</li>
        </ul>
    })
        return(  
            <ul className="commentsget">
                
                <li>{reply}</li>
                
                
                
            </ul>
            
        )
    }
    
    

export default getReplies;