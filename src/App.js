import React from 'react';
import './App.css';
import Comments from './component/commentsPost';
import Search from './component/Search'
import VideoList from './component/videoList';
import VideoPlayer from './component/videoPlayer';
import youtubeApi from './component/youtubeApi'
import commentAPI from './component/commentAPI'

export default class App extends React.Component {

  state = {
      videosMetaInfo: [],
      selectedVideoId: null,
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


    submitComment = async (text) => {
      console.log('text', text)

       await commentAPI.post("", 
       {
        params: {
          text: text,
          videoId: this.state.selectedVideoId
        }
      });

    }

  
   render() {
      return (
        <div className="App">
          <Search onSearch={this.onSearch} />
          <VideoList
            onVideoSelected={this.onVideoSelected}
            data={this.state.videosMetaInfo}
            />
            <VideoPlayer videoId={this.state.selectedVideoId} />
            <Comments submitComment = {this.submitComment} videoId = {this.state.selectedVideoId} />

        </div>
      );
    }
  
  }