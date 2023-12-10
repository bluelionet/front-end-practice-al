import { useEffect, useState } from 'react';
import Short from './components/Short.js';
import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';

function App() {
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    async function fetchShortsData() {
      try {
        // Fetch Shorts data from YouTube channel "THE FIRST TAKE".
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_DATA_API_KEY}&part=snippet&fields=${encodeURIComponent('items/id/videoId')}&channelId=UC9zY_E8mcAo_Oq772LEZq8Q&type=video&videoDuration=short&order=date&maxResults=5`);
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
  return (
    <Swiper
      modules={[Mousewheel]}
      direction="vertical"
      slidesPerView="auto"
      spaceBetween={24}
      centeredSlides
      mousewheel={{ forceToAxis: true }}
    >
      {videoIds.map(videoId => (
        <SwiperSlide key={videoId}>
          <Short videoId={videoId} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default App;
