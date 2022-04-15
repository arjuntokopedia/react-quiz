import { useState, useEffect } from 'react';

export default function useVideoTime(videoRef, rangeRef) {
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setVideoTime(videoRef.current?.duration);
  }, [videoRef.current?.duration, videoRef]);

  const handleChangeRange = (e) => {
    setCurrentTime(e.target.value);
    videoRef.current.currentTime = rangeRef.current.value;
  };

  const handleChangeTime = () => {
    setCurrentTime(videoRef.current?.currentTime);
  };

  return { videoTime, currentTime, handleChangeTime, handleChangeRange };
}
