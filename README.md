# Introduction

This is a front-end practice which mimics the look-and-feel and behavior of the YouTube Shorts page in dark mode using **React**. It displays the most recent Shorts from channel [THE FIRST TAKE](https://www.youtube.com/@The_FirstTake/shorts).

You can:

- **Drag-and-drop vertically** (on anywhere except the video iframe) to switch to previous/next video.
- **Click the play/pause button** (on the top-left corner of video iframe) to play/pause current video.
- **Click the mute/un-mute button** (on the top-right corner of video iframe) to mute/un-mute all videos.

# Live Demo

https://front-end-practice-al.vercel.app/

# Installation

1. `git clone` repository to your local environment.
1. `npm install` to install packages.
1. Obtain an **API Key** which has access to the **YouTube Data API v3**. (Read instructions [here](https://developers.google.com/youtube/v3/getting-started#before-you-start).)
1. Create an `.env.local` file under the repository's root folder. Type in `REACT_APP_YOUTUBE_DATA_API_KEY=` followed by your **API Key** and save. For example:

    ```env
    REACT_APP_YOUTUBE_DATA_API_KEY=paste_your_api_key_here
    ```

1. `npm start` and this practice should show up!

# Source Files Explanation

- `/src/App.js`: Root component.
- `/src/App.css`: Root CSS file.
- `/src/components/Short.js`: YouTube Short component. (Renders video iframe and all buttons.)
- `/src/components/PlayPauseButton.js`: Play/pause button component.
- `/src/components/MuteUnmuteButton.js`: Mute/un-mute button component.
- `/src/components/ActionButton.js`: Action button component. (Renders buttons besides video iframe, e.g., like button, dislike button, comment button.)

# Things To Be Refined

- [ ] Hide play/pause button and mute/un-mute button of inactive videos.
- [ ] Refine layout on mobile device.
- [ ] Implement look-and-feel in light mode.
- [ ] Implement light mode/dark mode switch.
- [ ] Implement mouse wheel control. (Swiper's mouse wheel control becomes buggy when used with iframe.)
- [ ] Load more videos while reaching the last/the 50th video. (YouTube Data API's search request can only retrieve 50 results at most per request.)
- [ ] Remove redundant create-react-app files and update favicon, page title, etc.

# References

- [YouTube Data API](https://developers.google.com/youtube/v3)
- [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)
- [react\-youtube](https://github.com/tjallingt/react-youtube)
- [Swiper](https://swiperjs.com/)
