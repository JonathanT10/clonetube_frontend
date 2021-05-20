import React from 'react';
import commentAPI from './commentAPI';



function GetComm (props) {
    let comm = []
    let comments = []
    const getComments = async (props) => {
       comments = await commentAPI.get(`/${props.videoId}`)
        console.log(comments)
         comm = comments.data;
      }
    
    return(
        
        <table className="commentsget">
            <caption>
                <button 
                 onClick={() => comments = getComments(props)}>
                 Click to view Comments
                </button>
                
            </caption>
            <tbody>
                {comments.map(comments => (
                    <tr key={comments.videId}>
                        <td>{comments.text}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
        
    )
}

export default GetComm;