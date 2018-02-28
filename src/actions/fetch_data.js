import axios from 'axios';

export default function fetchData() {

  const API_KEY = 'VRwTIuCIT0mKviiPsMeTUxFlLLt1DgAndhDsVHlL';
  const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
  const request = axios.get(END_POINT+API_KEY); // GET request

  return { // return a plain object with props
    type: 'FETCH_DATA', //Action type
    payload: request // Action Payload (cargo)
  }

}
