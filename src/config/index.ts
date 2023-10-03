import axios from 'axios';

export const fetchWrapper = axios.create({
  baseURL: 'https://findfalcone.geektrust.com/',
  timeout: 5000,
});
