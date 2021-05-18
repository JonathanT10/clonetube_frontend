import React from 'react';
import './App.css';
import Search from './component/Search'
import youtubeApi from './component/youtubeApi'

export default class App extends React.Component {

  state = {
      videosMetaInfo: [],
      selectedVideoId: null
    };

    onSearch = async keyword => {
      const response = await youtubeApi.get("/search", {
        params: {
          q: keyword
        }
      });
      this.setState({
        videosMetaInfo: response.data.items,
        selectedVideoId: response.data.items[0].id.videoId
      });
      console.log(this.state);
    };
  
   render() {
      return (
        <div className="App">
          <Search onSearch={this.onSearch} />
        </div>
      );
    }
  
  }