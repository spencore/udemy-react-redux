import axios from 'axios';

const KEY = 'AIzaSyApc116HI-cLoyWkD6Uuami4C4hasCCGRI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
