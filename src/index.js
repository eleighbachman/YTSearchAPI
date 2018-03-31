import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAyIjK5SKO_OBwRSUY728L-65QjtMR_6s8';


class App extends Component {
  constructor(props) {
    super(props);

    // add the concept of a 'selected' video

    this.state = {
      videos: [],
      selectedVideo: null
     };


     this.videoSearch('blogilates');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    // want to throttle the search function - pass debounced version down into SearchBar

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    // takes in the function, returns it as videoSearch that can only be called once every 300 milliseconds.

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}
          />
        <div id="footer" />
      </div>
    );


  }
}


ReactDOM.render(<App />, document.querySelector('.container'));



App.propTypes = {
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
  })).isRequired,
};

//Then you have your <Application players = {players} /> where your variable of players is an object in the shape of name: 'string', score: 'number'.
