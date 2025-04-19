import axios from 'axios';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: process.env.NEXT_YOUTUBE_API_KEY
  }
});

export default youtube;
