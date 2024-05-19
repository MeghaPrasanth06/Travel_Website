import React from 'react';

const VideoBackground = () => {
  return (
    <div id="video-container">
      <video autoPlay loop muted>
        <source src="C:\Users\megha\Downloads\WhatsApp Video 2024-05-02 at 5.56.26 PM.mp4" type="video/mp4" />
        {/* Add alternative video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
