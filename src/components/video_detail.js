import React from 'react';

const VideoDetail = ({video}) => {
  //React is too quick; if video is not provided yet, just say loading. But if it IS provided, then proceed with video player.
  if(!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;
  //Interpolation, woohoo!
  return (

    <div className="video-detail col-md-8">

      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div className="videoTitle">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );
}

export default VideoDetail;
