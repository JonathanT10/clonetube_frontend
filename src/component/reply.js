import React from 'react';

class Reply extends React.Component {
    state = {
        textR: ''
    }
    
    onReplyChanged = event => {
      const textR = event.target.value;
      this.setState({ textR: textR });
      console.log("text in reply",textR)
    };
    onSubmit = event => {
      event.preventDefault();
      this.props.submitReply(this.state.textR);
    };
 


render(){
    
    return (
        <form onSubmit={this.onSubmit} className = 'comments'>
        
            <input
            type = 'text'
            name = 'reply'
            defaultValue = {this.state.textR}
            onChange = {this.onReplyChanged}
            placeholder = 'Add public comment here'
            />
            <input type="submit" value="Reply"/>
        </form>
        
    )
    } 
}

export default Reply