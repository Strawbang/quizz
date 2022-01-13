import axios from 'axios';
const API = `http://localhost:8080/api/`;

export default axios.create({
  baseURL: API,
});