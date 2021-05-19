import React from 'react';

class Comments extends React.Component {
    state = {
        text: '',
        videoId: ''
    }
    
    onCommentChanged = event => {
      const text = event.target.value;
      this.setState({ text: text });
      console.log("text in comment",text)
    };
    onSubmit = event => {
      event.preventDefault();
      this.props.submitComment(this.state.text);
    };
 

    render(){
    
    return (
        <form onSubmit={this.onSubmit} className = 'comments'>
        
            <input
            type = 'text'
            name = 'comments'
            defaultValue = {this.state.text}
            onChange = {this.onCommentChanged}
            placeholder = 'Add public comment here'
            />
            <input type="submit" value="submit"/>
        </form>
        
    )
    } 
}

export default Comments;