import React from "react";
import YT_Logo from '../photos/YT_Logo.jpg';

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
      <>
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <img className = "ytlogo" src = {YT_Logo} alt = 'YouTube logo'/>
            <input
            className='search-bar'
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Search"
            />
          </div>
        </form>
      </>
    );
  }
}

export default Search;