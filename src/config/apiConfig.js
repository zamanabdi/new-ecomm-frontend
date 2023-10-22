import axios from 'axios';
// const DEPLOYED='https://pear-poised-hen.cyclic.app/'
export const API_BASE_URL='http://localhost:5454'
const jwt = localStorage.getItem("jwt");



const api = axios.create({
  baseURL: API_BASE_URL,
  headers:{
    'Authorization':`Bearer ${jwt}`,

'Content-Type' : 'application/json'
  }
});





export default api;