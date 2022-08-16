import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const videoplayerCurrentTime = 'videoplayer-current-time';
const player = new Player(iframe);

const seconds = +localStorage.getItem(videoplayerCurrentTime) || 0;
function onTimeUpdate(data) {
  localStorage.setItem(videoplayerCurrentTime, data.seconds);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.setCurrentTime(seconds);
