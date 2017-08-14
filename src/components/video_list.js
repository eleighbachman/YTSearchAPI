import React from 'react';
import VideoListItem from './video_list_item';

//VideoList returns a list of components, namely the Video List Items

// CSS styling Sets as Bootstrap column w/ width 4
// Aim to use built in iterators rather than for loops in JS React
const VideoList = (props) => {

  const videoArray = props.videos.map( (video) => { return (
    <VideoListItem
      onVideoSelect={props.onVideoSelect}
      video={video}
      key={video.etag}/>
  )});

  return (

    <ul className="col-md-4">

    {videoArray}


    </ul>
  )
};

export default VideoList;
