import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAyIjK5SKO_OBwRSUY728L-65QjtMR_6s8';


class App extends Component {
  constructor(props) {
    super(props);



    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
    })


  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos}/>
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
