import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c21b2c5d9e780f8dbb033d1e0d2d0baa4c06c3e5d9122a95abde24fee4bb3bd3'
  }
});
