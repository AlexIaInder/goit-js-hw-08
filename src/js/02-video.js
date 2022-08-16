import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const videoplayerCurrentTime = 'videoplayer-current-time';
const player = new Player(iframe);

const seconds = localStorage.getItem(videoplayerCurrentTime);
function onTimeUpdate(data) {
  localStorage.setItem(videoplayerCurrentTime, data.seconds);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));

player
  .setCurrentTime(seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
