import React from "react";
import  './Search.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';




class Search extends React.Component {
  state = { title: "" };
  onSearchChanged = event => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };
  render() {
    return (
    
      <div className = 'header'>
        <div className = 'header__left'>
          <MenuIcon />
            <img 
              className = 'header__logo'
              src = 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
              alt = 'YouTube logo'
            />
        </div>

        <div className = 'header__input'>
          <form onSubmit={this.onSubmit} >
              <input
              className='search-bar'
                id="video-search"
                type="text"
                value={this.state.title}
                onChange={this.onSearchChanged}
                placeholder="Search"
              />
          </form>
          <SearchIcon className = 'header__inputButton'/>
        </div>
        
        <div className = 'header__icons'>
          <VideoCallIcon  className = 'header__icon'/>
          <AppsIcon className = 'header__icon'/>
          <NotificationsIcon className = 'header__icon'/>
          <Avatar className = 'header__icon'/>
        </div>


      </div>
    );
  }
}

export default Search;