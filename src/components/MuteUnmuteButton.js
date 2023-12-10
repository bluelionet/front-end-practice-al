import { IconContext } from "react-icons";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

export default function MuteUnmuteButton({ isMuted, onClick }) {
  return (
    <button type="button" onClick={onClick} className="control-button">
      <IconContext.Provider value={{ color: '#fff', size: '24px' }}>
        {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
      </IconContext.Provider>
    </button>
  );
}
