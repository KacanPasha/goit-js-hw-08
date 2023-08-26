import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', (event) => {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
      player.setCurrentTime(savedTime);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
      player.setCurrentTime(savedTime);
    }
  });
  import throttle from 'lodash.throttle';

player.on('timeupdate', throttle((event) => {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000)); 



  