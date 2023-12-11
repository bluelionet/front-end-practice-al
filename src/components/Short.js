import { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import PlayPauseButton from './PlayPauseButton.js';
import MuteUnmuteButton from './MuteUnmuteButton.js';
import ActionButton from './ActionButton.js';

export default function Short({ videoId, index, activeIndex, isMutedGlobally, setIsMutedGlobally }) {
  const playerRef = useRef(undefined);
  const [shouldRender, setShouldRender] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Set `shouldRender` to `true` when it's about to be seen.
  useEffect(() => {
    if (index <= activeIndex + 2) {
      setShouldRender(true);
    }
  }, [index, activeIndex]);

  // Auto-play/pause video according to slide activeness.
  useEffect(() => {
    if (playerRef.current) {
      if (index === activeIndex) {
        if (isMutedGlobally) {
          playerRef.current.mute();
        } else {
          playerRef.current.unMute();
        }
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [index, activeIndex, isMutedGlobally]);

  // Render self only when `shouldRender` becomes `true`.
  return shouldRender && (
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
        onReady={e => {
          // Get player instance.
          playerRef.current = e.target;

          // Auto-play muted video if it's the first slide.
          if (index === 0) {
            playerRef.current.mute();
            playerRef.current.playVideo();
          }
        }}
        onStateChange={e => {
          setIsPlaying(e.data === YouTube.PlayerState.BUFFERING || e.data === YouTube.PlayerState.PLAYING);
        }}
        className="short__video"
      />

      {/* Control buttons on top of video iframe */}
      <div className="short__control-buttons">
        <PlayPauseButton
          isPlaying={isPlaying}
          onClick={() => {
            if (isPlaying) {
              playerRef.current.pauseVideo();
            } else {
              playerRef.current.playVideo();
            }
          }}
        />
        <MuteUnmuteButton
          isMuted={isMutedGlobally}
          onClick={() => {
            if (isMutedGlobally) {
              playerRef.current.unMute();
              setIsMutedGlobally(false);
            } else {
              playerRef.current.mute();
              setIsMutedGlobally(true);
            }
          }}
        />
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
