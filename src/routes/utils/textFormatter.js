export function secondsToMMSS(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration - minutes * 60);

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${minutes}:${seconds}`;
}
