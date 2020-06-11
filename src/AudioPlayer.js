import React, { useState } from 'react';

const link = 'https://nex1music.ir/upload/153452501374701878octave-savage-nist.jpg';
const simpleMusicLink = 'https://dl.nex1music.ir/1397/05/26/Octave%20-%20Savage%20Nist%20[128].mp3?time=1591897792&filename=/1397/05/26/Octave%20-%20Savage%20Nist%20[128].mp3';

const AudioPlayer = (props) => {
  const [music, musicSet] = useState({ audioLink: null, audio: null, isPlayed: false });
  const onPlayClick = () => {
    musicSet((lastMusic) => ({ ...lastMusic, isPlayed: !lastMusic.isPlayed }));
  };
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
          <div>
            <img className='audioPlayer__cover' src={link} />
          </div>
          <div className='audioPlayer__controls'>
            <div className='field-row' style={{ width: '300px' }}>
              <label htmlFor='range22'>Low</label>
              <input id='range22' type='range' min='0' max='100' step='1' />
              <label htmlFor='range23'>High</label>
            </div>
            <div className='audioPlayer__controls__buttons'>
              <button> {'<<'} </button>
              <button onClick={onPlayClick}>{music.isPlayed ? 'Stop' : 'Play!'}</button>
              <button>{'>>'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
