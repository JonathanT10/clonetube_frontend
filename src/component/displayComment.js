import React from 'react';


const myComment=(props) => {
    const renderedComments = props.comments.map(comment =>{
        return <li>{comment.text}</li>
    }) 
    return(
        <div>
            <ul>
                <li>{renderedComments}</li>
            </ul>
        </div>
    )
}

export default myComment;