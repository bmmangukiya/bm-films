import axios from 'axios';

const KEY = 'AIzaSyDz7IrG95j5_ZXuurZkNRxuocASMJse830';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});

export default youtube;
