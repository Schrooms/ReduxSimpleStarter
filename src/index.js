import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY= 'AIzaSyAv4B3s10sri_jxGkuhmcMUj7PPJDtStB8'


// create new component
// some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY,term: 'surfboards'}, (videos) => {
      console.log(videos);
      this.setState({videos});
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// take this componentn generated html and put it on
// the page
ReactDOM.render(<App />, document.querySelector('.container'));
