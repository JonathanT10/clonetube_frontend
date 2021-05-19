import React from 'react';
import commentAPI from './commentAPI';

const getComments = async (props) => {
    await commentAPI.get(`/${props.videoId}`)
  }

function GetComm () {
    let comments = getComments()
    return(
        <table>
            <caption>Comments</caption>
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