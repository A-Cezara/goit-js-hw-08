import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle(function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);
player.on('timeupdate', onPlay);

const resumeTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(resumeTime);
