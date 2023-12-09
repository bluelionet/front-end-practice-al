import { useState } from 'react';
import { IconContext } from "react-icons";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

export default function MuteUnmuteButton() {
  const [isMuted, setIsMuted] = useState(false);

  function toggleIsMuted() {
    setIsMuted(prevIsMuted => !prevIsMuted);
  }

  return (
    <button type="button" onClick={toggleIsMuted} className="control-button">
      <IconContext.Provider value={{ color: '#fff', size: '24px' }}>
        {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
      </IconContext.Provider>
    </button>
  );
}
