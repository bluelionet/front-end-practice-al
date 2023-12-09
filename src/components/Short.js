import YouTube from 'react-youtube';
import PlayPauseButton from './PlayPauseButton.js';
import MuteUnmuteButton from './MuteUnmuteButton.js';
import ActionButton from './ActionButton.js';

export default function Short({ videoId }) {
  return (
    <div className="short">
      {/* Youtube video iframe */}
      <YouTube
        videoId={videoId}
        opts={{
          width: 386,
          height: 686,
          playerVars: {
            controls: 0,
            fs: 0,
            loop: 1,
            playlist: videoId,
          },
        }}
        className="short__video"
      />

      {/* Control buttons on top of video iframe */}
      <div className="short__control-buttons">
        <PlayPauseButton />
        <MuteUnmuteButton />
      </div>

      {/* Action buttons beside video iframe */}
      <div className="short__action-buttons">
        <ActionButton type="like" />
        <ActionButton type="dislike" />
        <ActionButton type="comment" />
        <ActionButton type="share" />
        <ActionButton type="more" />
        <ActionButton type="track" />
      </div>
    </div>
  );
}
