import React from 'react';
import myComment from './displayComment';




function GetComm(props){
let comment = props.comments.map(comment => {
    return <li>{comment.text}</li>
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