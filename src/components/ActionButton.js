import classNames from 'classnames';
import { IconContext } from "react-icons";
import { MdThumbUp, MdThumbDown, MdComment, MdMoreHoriz, MdGraphicEq } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";

export default function ActionButton({ type }) {
  const icon = {
    like: <MdThumbUp />,
    dislike: <MdThumbDown />,
    comment: <MdComment />,
    share: <RiShareForwardFill />,
    more: <MdMoreHoriz />,
    track: <MdGraphicEq />,
  }[type] || null;
  const label = {
    like: '1234',
    dislike: '不喜歡',
    comment: '12',
    share: '分享',
  }[type] || '';

  return (
    <div className="action-button">
      <button
        type="button"
        className={classNames({
          'action-button__button': true,
          'action-button__button--square': type === 'track',
        })}
      >
        <IconContext.Provider
          value={{
            color: type === 'track' ? 'rgba(255, 255, 255, 0.3)' : '#f1f1f1',
            size: type === 'share' ? '26px' : '22px',
          }}
        >
          {icon}
        </IconContext.Provider>
      </button>
      {['like', 'dislike', 'comment', 'share'].indexOf(type) > -1 && (
        <span className="action-button__label">{label}</span>
      )}
    </div>
  );
}
