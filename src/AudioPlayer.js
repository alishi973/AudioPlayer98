import React, { useState, useEffect } from 'react';

const link = 'https://nex1music.ir/upload/153452501374701878octave-savage-nist.jpg';
const simpleMusicLink = 'https://www.w3schools.com/html/horse.ogg';
// const simpleMusicLink = 'https://dl.nex1music.ir/1397/05/26/Octave%20-%20Savage%20Nist%20[128].mp3?time=1591897792&filename=/1397/05/26/Octave%20-%20Savage%20Nist%20[128].mp3';

const AudioPlayer = (props) => {
  const [music, musicSet] = useState({ audioLink: null, audio: null, isPlayed: false });
  const onPlayClick = () => {
    if (!music.audio) {
      const fileLink = 'https://cors-anywhere.herokuapp.com/' + simpleMusicLink;

      /* fetch('https://cors-anywhere.herokuapp.com/' + simpleMusicLink)
        .then((res) => res.arrayBuffer())
        .then((blob) => {
          console.log(blob);
          const audioContext = new AudioContext();
          const audioSource = audioContext.createBufferSource();
          audioContext.decodeAudioData(blob, (res) => {
            audioSource.buffer = res;
            audioSource.connect(audioContext.destination);
            audioSource.start();
          });
          // musicSet((lastMusic) => ({ ...lastMusic, audio: new AudioBuffer().copyFromChannel(blob) }));
        }); */
      const audioContext = new AudioContext();
      const audioSource = audioContext.createBufferSource();

      const request = new XMLHttpRequest();
      request.open('GET', fileLink, true);
      request.responseType = 'arraybuffer';
      request.send();
      request.onprogress = (download) => {
        console.log(download);
      };
      request.onload = (file) => {
        audioContext.decodeAudioData(file.target.response, (res) => {
          audioSource.buffer = res;
          audioSource.connect(audioContext.destination);
          audioSource.start();
        });
        console.log(file);
      };
    }

    musicSet((lastMusic) => ({ ...lastMusic, isPlayed: !lastMusic.isPlayed }));
  };

  useEffect(() => {}, [music]);
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
