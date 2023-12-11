import { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import PlayPauseButton from './PlayPauseButton.js';
import MuteUnmuteButton from './MuteUnmuteButton.js';
import ActionButton from './ActionButton.js';

export default function Short({ videoId, index, activeIndex }) {
  const playerRef = useRef(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Auto-play/pause video according to slide activeness.
  useEffect(() => {
    if (playerRef.current) {
      if (index === activeIndex) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [index, activeIndex]);

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
        onReady={e => {
          // Get player instance.
          playerRef.current = e.target;

          // Auto-play muted video if it's the first slide.
          if (index === 0) {
            playerRef.current.mute();
            playerRef.current.playVideo();
            setIsMuted(true);
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
          isMuted={isMuted}
          onClick={() => {
            if (isMuted) {
              playerRef.current.unMute();
              setIsMuted(false);
            } else {
              playerRef.current.mute();
              setIsMuted(true);
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
