import { useState } from 'react';

export default function useMute() {
  const [muted, setMuted] = useState(false);

  const handleClickMute = () => {
    setMuted((prevState) => !prevState);
  };

  return { muted, handleClickMute };
}
