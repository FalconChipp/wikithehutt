import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video-container">
        <iframe src={videoSrcURL} title={videoTitle} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
            frameBorder="0" allowFullScreen height={500} width="100%"/>
    </div>
)

export default Video