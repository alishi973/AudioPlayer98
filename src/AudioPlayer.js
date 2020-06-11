import React from 'react';

const AudioPlayer = (props) => {
  const link = props.link || 'https://nex1music.ir/upload/153452501374701878octave-savage-nist.jpg';
  const simpleMusicLink = 'https://dl.nex1music.ir/1397/05/26/Octave%20-%20Savage%20Nist%20[128].mp3?time=1591897792&filename=/1397/05/26/Octave%20-%20Savage%20Nist%20[128].mp3';
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
              <button>Play</button>
              <button>{'>>'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
