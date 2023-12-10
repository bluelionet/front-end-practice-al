import { IconContext } from "react-icons";
import { MdPause, MdPlayArrow } from "react-icons/md";

export default function PlayPauseButton({ isPlaying, onClick }) {
  return (
    <button type="button" onClick={onClick} className="control-button">
      <IconContext.Provider value={{ color: '#fff', size: '24px' }}>
        {isPlaying ? <MdPause /> : <MdPlayArrow />}
      </IconContext.Provider>
    </button>
  );
}
