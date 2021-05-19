import React from 'react';

class Comments extends React.Component {
    state = {
        text: '',
        videoId: ''
    }

    onSubmit (e){
        e.preventDefault();
        this.props.submitComment(this.state.text)
        
    }

    render(props){
        

    return (
        <form className = 'comments'>
        
            <input
            type = 'text'
            name = 'comments'
            onSubmit = {this.onSubmit}
            placeholder = 'Add public comment here'
            />
            <input type="submit" value="submit"/>
        </form>
    )
    } 
}

export default Comments;