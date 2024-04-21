import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoFeed = () => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const fetchVideoFeed = async () => {
      try {
        const response = await axios.get('/video_feed');
        setVideoSrc(response.data);
      } catch (error) {
        console.error('Error fetching video feed:', error);
      }
    };

    fetchVideoFeed();

    // Cleanup function
    return () => {
      // Optionally, you can perform cleanup here
    };
  }, []);

  return (
    <div>
      <h1>Live Video Feed</h1>
      <img src={videoSrc} alt="Live video feed" />
    </div>
  );
};

export default VideoFeed;
