import { useEffect } from 'react';
import './App.css';

function App() {
  /*
   * Fetch YouTube shorts data from channel "THE FIRST TAKE".
   */
  useEffect(() => {
    async function fetchYouTubeShortsData() {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_DATA_API_KEY}&part=snippet&fields=${encodeURIComponent('items/id/videoId')}&channelId=UC9zY_E8mcAo_Oq772LEZq8Q&type=video&videoDuration=short&order=date&maxResults=1`);
        if (!response.ok) {
          throw new Error(`YouTube Data API Error (${response.status}).`);
        }
        const json = await response.json();
        console.log(json);
      } catch (e) {
        console.error(e);
      }
    }

    fetchYouTubeShortsData();
  }, []);

  return null;
}

export default App;
