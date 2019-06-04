import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2bc5f3ccc81203faf13ec64c60e31b94133c910fc3095dcf83a579db15d834c0'
  }
});