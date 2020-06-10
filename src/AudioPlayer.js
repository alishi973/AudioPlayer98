import React from 'react';

const AudioPlayer = () => {
  const link =/*  props.link || */ 'https://nex1music.ir/upload/153452501374701878octave-savage-nist.jpg';
  return (
    <div className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>Music Player</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body'>
        <div id='audioPlayer'>
          <img className="audioPlayer__cover" src={link} />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
