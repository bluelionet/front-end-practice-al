import { useEffect, useState } from 'react';
import Short from './components/Short.js';
import './App.css';

function App() {
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    async function fetchShortsData() {
      try {
        // Fetch Shorts data from YouTube channel "THE FIRST TAKE".
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_DATA_API_KEY}&part=snippet&fields=${encodeURIComponent('items/id/videoId')}&channelId=UC9zY_E8mcAo_Oq772LEZq8Q&type=video&videoDuration=short&order=date&maxResults=1`);
        if (!response.ok) {
          throw new Error(`YouTube Data API Error (${response.status}).`);
        }
        const json = await response.json();
        console.log(json);

        // Save Shorts data to app state "videoIds".
        setVideoIds(json.items.map(({ id: { videoId } }) => videoId));
      } catch (e) {
        console.error(e);
      }
    }

    fetchShortsData();
  }, []);

  // render Shorts from "videoIds".
  return videoIds.map(videoId => (
    <Short key={videoId} videoId={videoId} />
  ));
}

export default App;
