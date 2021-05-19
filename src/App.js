import React from 'react';
import './App.css';
import Search from './component/Search'

import VideoList from './component/videoList';
import VideoPlayer from './component/videoPlayer';
import youtubeApi from './component/youtubeApi'

export default class App extends React.Component {

  state = {
      videosMetaInfo: [],
      selectedVideoId: null
    };

    onVideoSelected = videoId => {
      this.setState({
        selectedVideoId: videoId
      })
    }

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
          <VideoList
            onVideoSelected={this.onVideoSelected}
            data={this.state.videosMetaInfo}
            />
            <VideoPlayer videoId={this.state.selectedVideoId} />
        </div>
      );
    }
  
  }