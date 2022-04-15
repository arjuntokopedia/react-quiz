import { useState } from 'react';

export default function usePlay(videoRef) {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!playing) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return { playing, handlePlayPause };
}
