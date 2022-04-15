import { useRef } from 'react';
import { secondsToMMSS } from '../utils/textFormatter';
import { cssVideo, videoContainer } from './style';
import useMute from './hooks/useMute';
import usePlay from './hooks/usePlay';
import useVideoTime from './hooks/useVideoTime';

const Player = () => {
  const videoRef = useRef();
  const rangeRef = useRef();
  const { handlePlayPause } = usePlay(videoRef);
  const { muted, handleClickMute } = useMute();
  const { videoTime, currentTime, handleChangeRange, handleChangeTime } =
    useVideoTime(videoRef, rangeRef);

  return (
    <div>
      <div className={videoContainer}>
        <video
          ref={videoRef}
          className={cssVideo}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          muted={muted}
          onTimeUpdate={handleChangeTime}
        />
      </div>
      <button type="button" onClick={handlePlayPause}>
        Play/Pause
      </button>
      <button type="button" onClick={handleClickMute}>
        Mute/Unmute
      </button>
      <input
        ref={rangeRef}
        type="range"
        min={0}
        max={videoTime || 0}
        step="5"
        onChange={handleChangeRange}
      />
      <span>
        {secondsToMMSS(currentTime)}/{secondsToMMSS(videoTime || 0)}
      </span>
    </div>
  );
};

export default Player;
