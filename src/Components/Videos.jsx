import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { GiPlayButton } from "react-icons/gi";
import './Videos.css';

const Videos = () => {
  const videoUrls = [
    "https://i.imgur.com/FVosppy_lq.mp4",
    "https://i.imgur.com/FVosppy_lq.mp4",
    "https://i.imgur.com/FVosppy_lq.mp4",
    "https://i.imgur.com/FVosppy_lq.mp4",
    "https://i.imgur.com/FVosppy_lq.mp4",
    "https://i.imgur.com/FVosppy_lq.mp4",
    "https://i.imgur.com/FVosppy_lq.mp4",
    "https://i.imgur.com/FVosppy_lq.mp4",
    "https://i.imgur.com/FVosppy_lq.mp4",
  ];

  const [videoStates, setVideoStates] = useState(Array(9).fill({ isPlaying: false }));

  const handlePlayClick = (index) => {
    const updatedStates = videoStates.map((state, i) => (i === index ? { isPlaying: true } : { isPlaying: false }));
    setVideoStates(updatedStates);
  };

  const handlePauseClick = (index) => {
    const updatedStates = videoStates.map((state, i) => (i === index ? { isPlaying: false } : state));
    setVideoStates(updatedStates);
  };

  return (
    <div className='videosbox-container'>
      <div className='videosbox'>
        {videoUrls.map((url, index) => (
          <div className='items' key={index}>
            <div className='items-video'>
              <div className={`image-section ${videoStates[index].isPlaying ? 'hidden' : ''}`}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`Your Image ${index + 1}`}
                />
                {!videoStates[index].isPlaying ? (
                  <div className="play-button" onClick={() => handlePlayClick(index)}>
                    <GiPlayButton />
                  </div>
                ) : (
                  <div className="pause-button" onClick={() => handlePauseClick(index)}>
                    Pause
                  </div>
                )}
              </div>
              {videoStates[index].isPlaying && (
                <div key={`video-${index}`}>
                  <video
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    onEnded={() => handlePauseClick(index)}
                    onPause={() => handlePauseClick(index)}
                  >
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* <div className='heart-icon'>
                    <FaRegHeart />
                  </div> */}
                </div>
              )}
              <div className='heart-icon'>
                <FaRegHeart />
              </div>
            </div>
            <div className='videodetails'>
              <div className='videodetails-1'>
                <p className='videotitle'>Video Title</p>
                <p className='videotime'>1:10</p>
              </div>
              <div className='videodetails-2'>
                <p className='videodesc'>video description</p>
              </div>
              <div className='videodetails-3'>
                <p className='price'>1000$</p>
                <button className='addtocart'>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
