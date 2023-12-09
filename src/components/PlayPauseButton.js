import { useState } from 'react';
import { IconContext } from "react-icons";
import { MdPlayArrow, MdPause } from "react-icons/md";

export default function PlayPauseButton() {
  const [isPlaying, setIsPlaying] = useState(true);

  function toggleIsPlaying() {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  }

  return (
    <button type="button" onClick={toggleIsPlaying} className="control-button">
      <IconContext.Provider value={{ color: '#fff', size: '24px' }}>
        {isPlaying ? <MdPlayArrow /> : <MdPause />}
      </IconContext.Provider>
    </button>
  );
}
