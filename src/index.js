import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAyIjK5SKO_OBwRSUY728L-65QjtMR_6s8';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log({ data });
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };


  }

  render() {
    return (
      <div>
        <SearchBar />
        
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
